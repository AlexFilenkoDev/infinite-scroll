import React, { FC, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import { PassengerCard } from "../PassengerCard/PassengerCard";
import { IListProps } from "../../interfaces";
import { useAppDispatch } from "../hooks";
import { setCurrentPage } from "../../store/reducers/pagesReducer/pagesActions";

import { useAppSelector } from "../hooks";
import { IPagesInfo } from "../../interfaces";
import { getPassengers } from "../../store/sagas/passengersSaga/passengersSagaActions";

import "./List.scss";

export const List: FC<IListProps> = ({ title, items }) => {
  const dispatcher = useAppDispatch()
  const loader = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>()
  const pagesInfo: IPagesInfo = useAppSelector((state) => state.pagesInfo);
  


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleObserver = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting && pagesInfo.current < pagesInfo.total) {
      dispatcher(setCurrentPage())
      dispatcher(getPassengers({...pagesInfo, current: pagesInfo.current + 1}));
    };
  }

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.current.observe(loader.current);
    }
  }, [handleObserver, items]);


  return (
    <div className="list">
      <div className="list__title">{title}</div>
      <div className="list__items">
        {items.map((item, index) => {
          const id = uuidv4()
          
          return (
          !(items.length === index + 1) ?
          <PassengerCard key={id} passenger={item} />
          :
          <PassengerCard key={id} ref={loader} passenger={item} />
        )})}
      </div>
    </div>
  );
};

import React, { useEffect, FC } from "react";
import { useAppSelector, useAppDispatch } from "./components/hooks";
import { getPassengers } from "./store/sagas/passengersSaga/passengersSagaActions";
import { IPassengers, IPagesInfo } from "./interfaces";
import { List } from "./components/List/List";
import { NavMenu } from "./components/NavMenu/NavMenu";
import UiLoading from "./components/UI/Loading/UiLoading";
import "./App.css";

const App: FC = () => {
  const dispatcher = useAppDispatch();
  const passengers: IPassengers = useAppSelector((state) => state.passengers);
  const isLoading: boolean = useAppSelector((state) => state.isLoading);
  const pagesInfo: IPagesInfo = useAppSelector((state) => state.pagesInfo);

  useEffect(() => {
    dispatcher(getPassengers(pagesInfo));
  }, []);

  return (
    <div className="wrapper">
      <List items={passengers} title={"Passengers List"} />
      {isLoading && <UiLoading />}
      <NavMenu />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { getListUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IListUsers } from "../utils/interfaces";
import UserCard from "./UserCard";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const listUsersArray: IListUsers | undefined = useSelector(
    (state) => (state as any).usersData.listUsers
  );

  useEffect(() => {
    dispatch(getListUsers());
    // eslint-disable-next-line
  }, []);

  const separateIntoArraysOfFive = (array: IListUsers | undefined) => {
    const result = [];
    for (let i = 0; i < array?.length; i += 5) {
      result.push(array?.slice(i, i + 5));
    }
    return result;
  };

  const arrayOfSeparatedArrays = separateIntoArraysOfFive(listUsersArray);
  const flattenedArray = arrayOfSeparatedArrays.flat();

  const [pageNumber, setPageNumber] = useState(1);
  const maxPages = arrayOfSeparatedArrays.length;

  const handleIncrement = () => {
    if (pageNumber < maxPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleDecrement = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const usersPerPage = 5;
  const startIndex = (pageNumber - 1) * usersPerPage;
  const endIndex = pageNumber * usersPerPage;

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <span>{pageNumber}</span>
        <button onClick={handleIncrement}>Increment</button>
      </div>

      {flattenedArray ? (
        <ul>
          {flattenedArray.slice(startIndex, endIndex).map((user: any) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default Main;

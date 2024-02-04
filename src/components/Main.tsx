import React, { useState, useEffect } from "react";
import { getListUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { IListUsers } from "../utils/interfaces";
import UserCard from "./UserCard";
import { StyledMain } from "../components/styles/Main.styled";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

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
    <StyledMain>
      <div data-testid="main-comp">
        {listUsersArray ? (
          <ul>
            {listUsersArray.slice(startIndex, endIndex).map((user: any) => (
              <UserCard key={user.id} user={user} />
            ))}
          </ul>
        ) : (
          <p>No users available.</p>
        )}
        <div className="pages-nav">
          <button
            className="page-arrow"
            onClick={handleDecrement}
            aria-label="decrement-page"
          >
            <IoIosArrowDropleftCircle />
          </button>
          <span>
            {pageNumber} / {maxPages}
          </span>
          <button
            className="page-arrow"
            onClick={handleIncrement}
            aria-label="increment-page"
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;

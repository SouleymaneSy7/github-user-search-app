/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { FC, ReactNode } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface UserContextProviderPropsTypes {
  children: ReactNode;
}

interface UserDataTypes {
  login: string;
  avatar_url: string;
  name: string;
  company: string | null;
  blog: string | undefined;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number | null | undefined;
  followers: number | null;
  following: number | null;
  created_at: string | null;
}

type ViewStateTypes =
  | { status: "loading" }
  | { status: "done" }
  | { status: "errors" };

interface UserContextTypes {
  userData: UserDataTypes | null;
  searchTerm: string;
  viewState: ViewStateTypes;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGetUser: () => void;
}

const UserContext = React.createContext<UserContextTypes | null>(null);

export const UserContextProvider: FC<UserContextProviderPropsTypes> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("SouleymaneSy7");
  const [userData, setUserData] = React.useState<UserDataTypes | null>(null);
  const [viewState, setViewState] = React.useState<ViewStateTypes>({
    status: "loading",
  });

  const url: string = `https://api.github.com/users/${searchTerm}`;

  const getUserData = async (
    url: string,
    options?: AxiosRequestConfig
  ): Promise<void> => {
    const response: AxiosResponse<UserDataTypes> = await axios(url, options);
    setUserData(response.data);
  };

  const handleGetUser = React.useCallback(async (): Promise<void> => {
    try {
      setViewState({ status: "loading" });

      await getUserData(url, {
        method: "GET",
        responseType: "json",
      });

      setViewState({ status: "done" });
    } catch (error) {
      if (error instanceof Error) {
        setViewState({ status: "errors" });
        console.error(error);
      }
    }
  }, [url]);

  React.useEffect(() => {
    handleGetUser();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const contextValue: UserContextTypes = {
    userData,
    viewState,
    searchTerm,
    handleSearch,
    handleGetUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = (): UserContextTypes => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

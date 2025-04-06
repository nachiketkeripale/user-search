import { useMemo, useState } from "react";
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Container from '@mui/material/Container';
import { useGetAllUsersQuery } from "../services/usersAPI";
import UserList from "./UserList";
import styled from "styled-components";

const StyledInput = styled(Input)(()=>({
    marginBottom:'20px',
    width:'100%',
    padding: "10px"
}))

const SearchBar = () => {

  const { data, isLoading } = useGetAllUsersQuery();
  const [search,setSearch] = useState<string>('');

  const searchFiltering = useMemo(() => {
    if(!data || !Array.isArray(data.users)) return [];
    return data.users.filter(user => {
      const fullName = `${user.firstName} ${user.lastName} ${user.maidenName}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
    });
  },[data, search]);

    return (
    <Container>
    <Typography variant="h5">Random User Search</Typography>
    <StyledInput
      type="text"
      placeholder="Search by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    {isLoading && <Typography variant="h5">Loading...</Typography>}
    {!isLoading && <UserList searchFiltering={searchFiltering}/>}
  </Container>
  )
}

export default SearchBar
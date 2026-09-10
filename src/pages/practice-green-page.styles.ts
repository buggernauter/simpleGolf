import styled from "styled-components";

export const StyledPage = styled.main`
  box-sizing: border-box;
  min-height: 100vh;
  /* padding: clamp(1rem, 4vw, 4rem); */
  margin-right: 1rem;
  background: #f4f1e9;
  color: #24211d;
  font-family: Georgia, "Times New Roman", serif;
`;

export const StyledSheet = styled.section`
  width: min(100%, 55rem);
  margin: 0 auto;
  padding: clamp(1.25rem, 4vw, 3.5rem);
  border: 0.0625rem solid #dbd4c7;
  background: #fffefd;
  box-shadow: 0 1.5rem 3.75rem rgba(47, 39, 25, 0.1);
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  margin-bottom: clamp(1.75rem, 4vw, 3rem);
`;

export const StyledTitle = styled.h1`
  margin: 0;
  color: #39342c;
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 400;
  letter-spacing: 0.03em;
`;

export const StyledBackLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 0.35rem;
  color: #514a3d;
  font-family: Arial, sans-serif;
  font-size: 0.875rem;
  text-decoration: none;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledResetButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-self: end;
  gap: 0.35rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: #514a3d;
  font-family: Arial, sans-serif;
  font-size: 0.875rem;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  gap: clamp(1.5rem, 4vw, 2.75rem);
`;

export const StyledMetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem clamp(1.25rem, 5vw, 8rem);

  label {
    display: grid;
    gap: 0.55rem;
    color: #403a32;
    font-size: clamp(1rem, 2vw, 1.25rem);
    letter-spacing: 0.02em;
  }

  @media (max-width: 34rem) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  min-height: 2.25rem;
  box-sizing: border-box;
  padding: 0.25rem 0;
  border: 0;
  border-bottom: 0.0625rem solid #8b867d;
  border-radius: 0;
  outline: none;
  background: transparent;
  color: #24211d;
  font-family: Arial, sans-serif;
  font-size: 1rem;

  &:focus-visible {
    border-bottom-color: #a77d00;
    box-shadow: 0 0.125rem 0 #a77d00;
  }
`;

export const StyledScoreTable = styled.table`
  width: 100%;
  overflow: hidden;
  border: 0.09375rem solid #27231b;
  border-radius: 1.25rem;
  border-spacing: 0;
  border-collapse: separate;
  table-layout: fixed;

  th,
  td {
    height: clamp(3.2rem, 7vw, 4rem);
    padding: 0.25rem 0.75rem;
    border-right: 0.0625rem solid #676258;
    border-bottom: 0.0625rem solid #8b867d;
    text-align: center;
    vertical-align: middle;
  }

  th:last-child,
  td:last-child {
    border-right: 0;
  }

  thead th {
    height: clamp(3.6rem, 8vw, 4.4rem);
    border-bottom-color: #27231b;
    background: #ffd407;
    color: #18150f;
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  thead th:first-child {
    width: 20%;
    text-align: left;
  }

  thead th:nth-child(2) {
    width: 43%;
  }

  thead th:nth-child(3) {
    width: 37%;
  }

  tbody th,
  tbody td {
    font-family: Arial, sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-weight: 400;
  }

  tbody th,
  tbody td:nth-child(2) {
    background: #fff3bf;
  }

  tbody tr:last-child th,
  tbody tr:last-child td {
    border-bottom: 0.0625rem solid #27231b;
  }

  tfoot th,
  tfoot td {
    height: clamp(3.25rem, 7vw, 4rem);
    border-bottom: 0;
    background: #fff8d9;
    font-size: clamp(1.1rem, 3vw, 1.4rem);
    font-weight: 400;
    text-transform: uppercase;
  }

  @media (max-width: 27rem) {
    th,
    td {
      padding: 0.25rem;
    }
  }
`;

export const StyledScoreInput = styled.input`
  width: min(100%, 5rem);
  height: 2.35rem;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.35rem;
  outline: 0.0625rem solid transparent;
  background: transparent;
  color: #24211d;
  font-family: Arial, sans-serif;
  font-size: 1.125rem;
  text-align: center;

  &:hover {
    background: #fff9e8;
  }

  &:focus-visible {
    outline-color: #a77d00;
    background: #fffdf4;
  }
`;

export const StyledTotal = styled.td`
  font-family: Arial, sans-serif;
`;

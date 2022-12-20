import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GET_VENDORS_QUERY } from "../queries/productQueries";
import VendorList from "../components/vendor/VendorList";

const mocks = [{
  request: {
    query: GET_VENDORS_QUERY,
  },
  result: {
    data: {
      dog: { _id: "1", name: "Nike" }
    }
  }
}];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <VendorList />
    </MockedProvider>
  );
  expect(await screen.findByText("Laddar...")).toBeInTheDocument();
});
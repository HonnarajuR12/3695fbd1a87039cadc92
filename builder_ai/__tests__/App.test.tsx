import { render, fireEvent } from "@testing-library/react-native";
import Home from "../src/screens/Home";
import CreateSlots from "../src/screens/CreateSlots";
import RegisterSlots from "../src/screens/RegisterSlots";
import ClearSlots from "../src/screens/ClearSlots";

describe("Home suite", () => {
    it("works", () => {
        const test = true;
        expect(test).toBe(true);
    });

    it("renders properly", () => {
        render(<Home navigation={{ navigate: () => { } }} />);
    });

    it("matches snapshot", () => {
        const tree = render(<Home navigation={{ navigate: () => { } }} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});

describe("Create slots suite", () => {
    it("renders properly", () => {
        render(<CreateSlots navigation={{ goBack: () => { } }} />);
    });

    it("matches snapshot", () => {
        const tree = render(<CreateSlots navigation={{ goBack: () => { } }} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it("matches test id", () => {
        const tree = render(<CreateSlots navigation={{ goBack: () => { } }} />);
        expect(tree.findByTestId("parking-create-text-input")).toBeTruthy();
    });
});

describe("Register slot suite", () => {
    it("renders properly", () => {
        render(<RegisterSlots navigation={{ goBack: () => { } }} />);
    });

    it("matches snapshot", () => {
        const tree = render(<RegisterSlots navigation={{ goBack: () => { } }} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it("matches test id", () => {
        const tree = render(<RegisterSlots navigation={{ goBack: () => { } }} />);
        expect(tree.findByTestId("parking-drawing-registration-input")).toBeTruthy();
    });
});

describe("Clear slot suite", () => {
    it("renders properly", () => {
        render(<ClearSlots navigation={{ goBack: () => { } }} />);
    });

    it("matches snapshot", () => {
        const tree = render(<ClearSlots navigation={{ goBack: () => { } }} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });


    it("matches test id", () => {
        const tree = render(<ClearSlots navigation={{ goBack: () => { } }} />);
        expect(tree.findByTestId("deregister-car-registration")).toBeTruthy();
    });
});
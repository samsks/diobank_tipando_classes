import Account from "./Account";

class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    try {
      this.depositOnBalance(value, "loan");
    } catch (error) {
      console.log(error);
    }
  };
}

export default CompanyAccount;

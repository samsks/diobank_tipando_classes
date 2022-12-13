abstract class Account {
  private readonly accountNumber: number;
  private readonly name: string;
  private balance: number = 0;
  private status: boolean = true;
  private addOperations = { deposit: "Depósito", loan: "Empréstimo" };

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  getBalance = (): number => {
    return this.balance;
  };

  validateAddOperation = (type: string): string => {
    return this.addOperations[type as keyof typeof this.addOperations];
  };

  depositOnBalance = (value: number, type: string): void => {
    try {
      this.setAddBalance(value);

      console.log(
        `${this.validateAddOperation(type)} de R$${value.toFixed(
          2
        )} realizado com sucesso. \n Saldo: R$${this.getBalance()}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  withdrawOnBalance = (value: number): void => {
    try {
      this.setSubBalance(value);
      console.log(
        `Saque de R$${value.toFixed(
          2
        )} realizado com sucesso. \n Saldo: R$${this.getBalance()}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  setAddBalance = (value: number): void => {
    try {
      if (this.validateStatus()) {
        this.balance = this.balance + value;
      } else {
        throw new Error("Conta desativada");
      }
    } catch (error) {
      console.log(error);
    }
  };

  setSubBalance = (value: number): void => {
    try {
      if (this.validateStatus()) {
        if (this.balance >= value) {
          this.balance = this.balance - value;
        } else {
          throw new Error("Saldo insuficiente");
        }
      } else {
        throw new Error("Conta desativada");
      }
    } catch (error) {
      console.log(error);
    }
  };

  private validateStatus = (): boolean => {
    return this.status;
  };
}

export default Account;

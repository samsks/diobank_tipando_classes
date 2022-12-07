import Account from "./Account";

class BonusAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  depositOnBalance = (value: number): void => {
    try {
      this.setAddBalance(value + 10);

      console.log(
        `Depósito no valor de R$${value.toFixed(
          2
        )} + R$10,00 de bônus, realizado com sucesso. \n Saldo: R$${this.getBalance()}`
      );
    } catch (error) {
      console.error(error);
    }
  };
}

export default BonusAccount;

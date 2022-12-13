import PeopleAccount from "./class/PeopleAccount";
import CompanyAccount from "./class/CompanyAccount";
import BonusAccount from "./class/BonusAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1234, "Sam", 5678);
const companyAccount: CompanyAccount = new CompanyAccount("AlePhoto", 434524);
const bonusAccount: BonusAccount = new BonusAccount("Sortudo Silva", 863823);

console.table(peopleAccount);
console.table(companyAccount);
console.table(bonusAccount);

peopleAccount.depositOnBalance(150, "deposit");
bonusAccount.depositOnBalance(200);
companyAccount.depositOnBalance(2000, "loan");

bonusAccount.withdrawOnBalance(250);

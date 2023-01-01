import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  <h1 class="heading-interest">Actually Interest Rate Calculator</h1>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// const moneyinterest = document.querySelector("#money-interest");
// const daysinterest = document.querySelector("#days-interest");
// const rateinterest = document.querySelector("#rate-interest]");
// const actuallyrate = document.querySelector("input[name=rate-interest]");

// const Period: number = daysinterest / 365;
// const Interest: number = Math.floor(moneyinterest * rateinterest * Period);

// const IncomeTax = Math.floor(Interest * 0.15);
// const ReconstructionIncomeTax = Math.floor(Interest * 0.00315);
// const LocalTax = Math.floor(Interest * 0.05);

// const NetIncome =
//     Interest - IncomeTax - ReconstructionIncomeTax - LocalTax;

// const ActuallyInterest = NetIncome / i;

// const calc = ()=>{
//   actuallyrate.value = Number(ActuallyInterest.value);
// }

// moneyinterest.addEventListener("keyup", calc, false);
// daysinterest.addEventListener("keyup", calc, false);
// rateinterest.addEventListener("keyup", calc, false);

// for (let i = 10000; i < 20000; i++) {
//   const Period = 364 / 365;
//   const InterestRate = 0.002;

//   let Interest = Math.floor(i * InterestRate * Period);

//   let IncomeTax = Math.floor(Interest * 0.15);
//   let ReconstructionIncomeTax = Math.floor(Interest * 0.00315);
//   let LocalTax = Math.floor(Interest * 0.05);

//   let NetIncome =
//     Interest - IncomeTax - ReconstructionIncomeTax - LocalTax;

//   let ActuallyInterest = NetIncome / i;

//   console.log(
//     i,
//     NetIncome,
//     IncomeTax,
//     ReconstructionIncomeTax,
//     LocalTax,
//     ActuallyInterest
//   );

//   let data = [i, ActuallyInterest];

//   console.log(data);
// }



const moneyInterestDom =
  document.querySelector<HTMLInputElement>("#money-interest");
const daysInterestDom =
  document.querySelector<HTMLInputElement>("#days-interest");
const rateInterestDom =
  document.querySelector<HTMLInputElement>("#rate-interest");

const outputInterestDom =
  document.querySelector<HTMLOutputElement>("#actually-interest");

const calc = () => {
  // actuallyRateInterest = Number(ActuallyInterest.value);

  const moneyInterest = Number(moneyInterestDom?.value) ?? 0;
  const daysInterest = Number(daysInterestDom?.value) ?? 0;
  const rateInterest = Number(rateInterestDom?.value) ?? 0;

  const period = daysInterest / 365;
  const interest = Math.floor(moneyInterest * rateInterest * period);

  const incomeTax = Math.floor(interest * 0.15);
  const reconstructionIncomeTax = Math.floor(interest * 0.00315);
  const localTax = Math.floor(interest * 0.05);

  const netIncome = interest - incomeTax - reconstructionIncomeTax - localTax;

  const actuallyInterest = netIncome / moneyInterest;

  console.log(actuallyInterest);

  outputInterestDom!.innerHTML = `
  ${actuallyInterest}
  ${netIncome}
`;
};

moneyInterestDom?.addEventListener("keyup", calc, false);
daysInterestDom?.addEventListener("keyup", calc, false);
rateInterestDom?.addEventListener("keyup", calc, false);

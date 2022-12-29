import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
  <h1 class="heading-interest">預金金利計算</h1>
  <div>
    <div class="input-label-interest">
      <label for="money-interest">預け入れ金額</label>
      <input
        type="inputinterest"
        name="money-interest"
        id="money-interest"
        min="10000"
        placeholder="1万円以上"
      />円
    </div>
    <div class="input-label-interest">
      <label for="days-interest">預け入れ日数</label>
      <input
        type="inputinterest"
        name="days-interest"
        id="days-interest"
        min="1"
        placeholder="1日以上"
      />日
    </div>
    <div class="input-label-interest">
      <label for="rate-interest">利率</label>
      <input
        type="inputinterest"
        name="rate-interest"
        id="rate-interest"
        placeholder="0.001%単位"
      />%
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)





for (let i = 10000; i < 20000; i++) {
  const Period = 364 / 365;
  const InterestRate = 0.002;

  let Interest = Math.floor(i * InterestRate * Period);

  let IncomeTax = Math.floor(Interest * 0.15);
  let ReconstructionIncomeTax = Math.floor(Interest * 0.00315);
  let LocalTax = Math.floor(Interest * 0.05);

  let NetIncome =
    Interest - IncomeTax - ReconstructionIncomeTax - LocalTax;

  let ActuallyInterest = NetIncome / i;

  // console.log(
  //   i,
  //   NetIncome,
  //   IncomeTax,
  //   ReconstructionIncomeTax,
  //   LocalTax,
  //   ActuallyInterest
  // );

  let data = [i, ActuallyInterest];

  console.log(data);
}

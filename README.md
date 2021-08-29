# Cash Flow Rebalancing Calculator

rename everything to "cash flow rebalancing calculator"

**_This is still in early development, and not ready for real-world use yet._**

----

This calculator helps you [rebalance](https://www.bogleheads.org/wiki/Rebalancing) an investment portfolio using the cash flow rebalancing strategy[link].

<!--
https://canadiancouchpotato.com/2014/06/23/rebalancing-with-cash-flows/ 

https://investor.vanguard.com/investing/portfolio-management/rebalance is also good, link to both?
https://investornews.vanguard/rebalancing/
-->

[![Screenshot of interface](.github/screenshot.png?raw=true)](.github/screenshot.png?raw=true)

## Features

* handles multiple accounts. shows you the allocation for each, and the allocation of the total portfolio
* assign tags to each investment, so can examine along multiple factors . e.g., domestic vs foreign, stocks vs bonds, socially-responsible vs amoral.

## Instructions

It's a simple interactive web page, so [you can use it right now](https://iandunn.github.io/cash-flow-rebalancing-calculator/).

Instructions are in the calculator itself, so that they're easy to access while using it. [Open the calculator](https://iandunn.github.io/cash-flow-rebalancing-calculator/) to read them.

## Privacy

All of your data is stored in your browser, and never sent to any server.

## Alternatives

* http://optimalrebalancing.tk/ - easier to use in some ways, but harder in others. don't have to manually make adjustments, but have to enter data in a specific format. data not saved for future visits

## Contributing

* `git clone https://github.com/iandunn/cash-flow-rebalancing-calculator.git`
* `cd cash-flow-rebalancing-calculator`
* `npm install`
* `npm run watch`
* `open http://localhost:3000/`

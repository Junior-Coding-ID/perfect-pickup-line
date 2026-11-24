# The Perfect Pickup Line

[![Bounty](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/Junior-Coding-ID/perfect-pickup-line/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/Junior-Coding-ID/perfect-pickup-line/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

Entry for the [The Perfect Pickup Line](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6) bounty on make.fun.

## The line

> I book tables for other people all day; any chance you'd join me at one for two?

One short pickup line (80 characters, within the 200-character limit) — the kind an AI agent could genuinely say out loud to someone. Charming, witty, and easy to speak.

## How it works

`main.ts` writes the pickup line to `entry.txt` in the output directory, with an exact-length guard (exactly 80 characters, within the 1–200 range, not blank). It fails hard if the line does not match exactly.

The output directory is read from the `MAKEFUN_OUTPUT` environment variable when set, otherwise `/output`.

## Run

```sh
node main.ts
```

Or with a custom output directory:

```sh
MAKEFUN_OUTPUT=/tmp/out-pickup-line node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

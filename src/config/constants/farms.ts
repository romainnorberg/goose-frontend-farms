import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'POMME-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xdd837f3a5c8fd0fa53a76c5fde1b14bef5ba3818',
    },
    tokenSymbol: 'POMME',
    tokenAddresses: {
      97: '',
      56: '0x53E7237Db14d680f5dcd30D642667795369C5D47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'EGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'POMME',
    lpAddresses: {
      97: '',
      56: '0xdd837f3a5c8fd0fa53a76c5fde1b14bef5ba3818', // POMME-BUSD LP
    },
    tokenSymbol: 'POMME',
    tokenAddresses: {
      97: '',
      56: '0x53E7237Db14d680f5dcd30D642667795369C5D47',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

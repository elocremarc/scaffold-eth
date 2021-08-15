import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { numberWithCommas } from '../../utils/numberWithCommas'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'

function CurrentBalance(): JSX.Element {
  const [data, setData] = useState([])

  useEffect(() => {
    // TODO Fetch current balance
    setData(dummyData)
  }, [])

  const currBalance =
    (data && data.length > 0 && data[data.length - 1]['balance']) || 0
  const split = currBalance.toString().split('.')
  const currBalanceFirstPart = parseFloat(split[0])
  const ytdBalance =
    (data && data.length > 0 && data[data.length - 2]['balance']) || 0
  const percentageDiff = parseFloat(
    (((currBalance - ytdBalance) / ytdBalance) * 100).toFixed(2)
  )

  return (
    <Flex
      alignItems="flex-end"
      position="relative"
      border="1px solid var(--chakra-colors-gray-200)"
      borderRadius="lg"
      width={400}
      height={200}
    >
      <Box position="absolute" top="1.5rem" left="1.5rem" zIndex="1">
        <Text>Current Balance</Text>
        <Box>
          <Text d="inline-block" mr=".3rem">
            $
          </Text>
          <Text fontSize="200%" fontWeight="bold" d="inline-block">
            {data && data.length > 0 && numberWithCommas(currBalanceFirstPart)}
          </Text>
          <Text
            d="inline-block"
            ml=".3rem"
            color={percentageDiff > 0 ? 'green.500' : 'red.500'}
          >
            {percentageDiff < 0 && '-'}
            {percentageDiff}%
          </Text>
        </Box>
      </Box>
      <Box height="60%" width="100%">
        <ResponsiveContainer>
          <AreaChart width={500} height={200} data={data}>
            <XAxis dataKey="date" hide={true} />
            <YAxis domain={['dataMin', 'dataMax']} hide={true} />
            <Tooltip 
                formatter={(value, name) => [`$ ${numberWithCommas(value)}`, capitalizeFirstLetter(name)] }
                contentStyle={{ fontSize: '90%' }} />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#19DB53"
              fill="#CDFFDC"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  )
}

// Generate dummy data
const dummyData = [],
  N = 30
let currBalance = 95930
for (let i = N; i >= 0; i--) {
  let toAdd = 0
  // every 30 days, subtract instead of add; simulate salary deduction
  if (i % 30) {
    toAdd -= 13468
  }
  toAdd = Math.random() * (30000 - 200) + 200

  let result = moment()
  result = result.subtract(i, 'days')

  dummyData.push({
    date: result.format('DD MMM YY'),
    balance: parseFloat((currBalance + toAdd).toFixed(2)),
  })
  currBalance += toAdd
}

export default CurrentBalance

/** @jsx jsx */
import { useState } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import { rgba } from 'polished';
import Link from 'next/link'

const monthly = [
  {
    id: 1,
    title: 'Free',
    subtitle: 'For Small team',
    amount: 0,
    isRecommended: false,
    buttonText: 'Start free trail',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '100 Conversations /Bot/Month',
      },
      {
        id: 2,
        isAvailable: true,
        title: `1 Bot`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Email support`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Analytics`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Lead Pipeline`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `1 Unlocked Profile Card`,
      },
      {
        id: 7,
        isAvailable: false,
        title: `Leads Validation(Email Only)`,
      },
      {
        id: 8,
        isAvailable: false,
        title: `1 Live Agent`,
      },
      {
        id: 9,
        isAvailable: false,
        title: `SmartMeet Bookings`,
      },
      {
        id: 10,
        isAvailable: false,
        title: `Android / ios App`,
      },
      {
        id: 11,
        isAvailable: false,
        title: `AI Recommendations`,
      },
    ],
  },
  {
    id: 2,
    title: 'Plus',
    subtitle: 'For startup',
    amount: 1499,
    isRecommended: false,
    buttonText: 'Get Started',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '500 Conversations /Bot/Month',
      },
      {
        id: 2,
        isAvailable: true,
        title: `1 Custom Bot`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Email & Chat support`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Analytics`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Lead Pipeline`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `5 Unlocked Profile Cards`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Leads Validation(Email Only)`,
      },
      {
        id: 8,
        isAvailable: true,
        title: `1 Live Agent`,
      },
      {
        id: 9,
        isAvailable: true,
        title: `SmartMeet Bookings`,
      },
      {
        id: 10,
        isAvailable: true,
        title: `Android / ios App`,
      },
      {
        id: 11,
        isAvailable: false,
        title: `AI Recommendations`,
      },
    ],
  },
  {
    id: 3,
    title: 'Professional',
    subtitle: 'For mid-size',
    amount: 3499,
    isRecommended: true,
    buttonText: 'Get Started',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '2000 Conversations /Bot/Month',
      },
      {
        id: 2,
        isAvailable: true,
        title: `3 Custom Bots`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Email & Chat support`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Analytics`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Lead Pipeline`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `15 Unlocked Profile Cards`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Leads Validation(Email & OTP)`,
      },
      {
        id: 8,
        isAvailable: true,
        title: `3 Live Agents`,
      },
      {
        id: 9,
        isAvailable: true,
        title: `SmartMeet Bookings`,
      },
      {
        id: 10,
        isAvailable: true,
        title: `Android / ios App`,
      },
      {
        id: 11,
        isAvailable: true,
        title: `AI Recommendations`,
      },
    ],
  },
  {
    id: 4,
    title: 'Premium',
    subtitle: 'For large enterprise',
    amount: 8999,
    isRecommended: false,
    buttonText: 'Get Started',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '5000 Conversations /Bot/Month',
      },
      {
        id: 2,
        isAvailable: true,
        title: `10 Custom Bots`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Email & Chat support`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Analytics`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Lead Pipeline`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `50 Unlocked Profile Cards`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Leads Validation(Email & OTP)`,
      },
      {
        id: 8,
        isAvailable: true,
        title: `10 Live Agents`,
      },
      {
        id: 9,
        isAvailable: true,
        title: `SmartMeet Bookings`,
      },
      {
        id: 10,
        isAvailable: true,
        title: `Android / ios App`,
      },
      {
        id: 11,
        isAvailable: true,
        title: `AI Recommendations`,
      },
    ],
  },
];

const annual = [
  {
    id: 1,
    title: 'Free',
    subtitle: 'For Small teams or office',
    amount: 0,
    isRecommended: false,
    buttonText: 'Start free trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '100 Conversations /Bot/Month',
      },
      {
        id: 2,
        isAvailable: true,
        title: `1 Bot`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Email support`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Analytics`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Lead Pipeline`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `1 Unlocked Profile Card`,
      },
      {
        id: 7,
        isAvailable: false,
        title: `Leads Validation(Email Only)`,
      },
      {
        id: 8,
        isAvailable: false,
        title: `1 Live Agent`,
      },
      {
        id: 9,
        isAvailable: false,
        title: `SmartMeet Bookings`,
      },
      {
        id: 10,
        isAvailable: false,
        title: `Android / ios App`,
      },
      {
        id: 11,
        isAvailable: false,
        title: `AI Recommendations`,
      },
    ],
  },
  {
    id: 2,
    title: 'Plus',
    subtitle: 'For startup enterprise',
    amount: 14990,
    isRecommended: false,
    buttonText: 'Get Started',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '500 Conversations /Bot/Month',
      },
      {
        id: 2,
        isAvailable: true,
        title: `1 Custom Bot`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Email & Chat support`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Analytics`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Lead Pipeline`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `5 Unlocked Profile Cards`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Leads Validation(Email Only)`,
      },
      {
        id: 8,
        isAvailable: true,
        title: `1 Live Agent`,
      },
      {
        id: 9,
        isAvailable: true,
        title: `SmartMeet Bookings`,
      },
      {
        id: 10,
        isAvailable: true,
        title: `Android / ios App`,
      },
      {
        id: 11,
        isAvailable: false,
        title: `AI Recommendations`,
      },
    ],
  },
  {
    id: 3,
    title: 'Professional',
    subtitle: 'For startup enterprise',
    amount: 34990,
    isRecommended: true,
    buttonText: 'Get Started',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '2000 Conversations /Bot/Month',
      },
      {
        id: 2,
        isAvailable: true,
        title: `3 Custom Bots`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Email & Chat support`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Analytics`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Lead Pipeline`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `15 Unlocked Profile Cards`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Leads Validation(Email & OTP)`,
      },
      {
        id: 8,
        isAvailable: true,
        title: `3 Live Agents`,
      },
      {
        id: 9,
        isAvailable: true,
        title: `SmartMeet Bookings`,
      },
      {
        id: 10,
        isAvailable: true,
        title: `Android / ios App`,
      },
      {
        id: 11,
        isAvailable: true,
        title: `AI Recommendations`,
      },
    ],
  },
  {
    id: 4,
    title: 'Premium',
    subtitle: 'For startup enterprise',
    amount: 89990,
    isRecommended: false,
    buttonText: 'Get Started',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '5000 Conversations /Bot/Month',
      },
      {
        id: 2,
        isAvailable: true,
        title: `10 Custom Bots`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Email & Chat support`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Analytics`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Lead Pipeline`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `50 Unlocked Profile Cards`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Leads Validation(Email & OTP)`,
      },
      {
        id: 8,
        isAvailable: true,
        title: `10 Live Agents`,
      },
      {
        id: 9,
        isAvailable: true,
        title: `SmartMeet Bookings`,
      },
      {
        id: 10,
        isAvailable: true,
        title: `Android / ios App`,
      },
      {
        id: 11,
        isAvailable: true,
        title: `AI Recommendations`,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
    if (plan === 'annual') {
      setPlan({
        ...plan,
        active: 'annual',
        pricingPlan: annual,
      });
    }
  };
  return (
    <Box
      as="section"
      id="pricing"
      sx={styles.section}
      variant="section.pricing"
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Pricing"
          description="Best Solution. Best Price. Get the plan that's suitable for your Business"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span" className="discount">
            Save 16.67%
          </Text>
          <Button
            variant="text"
            onClick={() => handlePlan('monthly')}
            className={`${plan.active === 'monthly' ? 'active' : ''}`}
          >
            Monthly
          </Button>
          <Button
            variant="text"
            onClick={() => handlePlan('annual')}
            className={`${plan.active === 'annual' ? 'active' : ''}`}
          >
            Annually
          </Button>
        </Flex>
        <Grid sx={styles.priceWrapper}>
          {plan.pricingPlan.map((price, index) => (
            <PriceTable price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 mt-8 text-center">We also offer Custom plans for Businesses. Please contact us.</p>
        <Link href="plan-comparision">
                    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Plan Comparision</button>
                    </Link>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  heading: {
    mb: [60, null, null, 50],
  },
  priceSwitcher: {
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    border: `1px solid ${rgba('#fff', 0.2)}`,
    margin: ['0 auto 40px', null, null, '0 auto 50px'],
    maxWidth: 300,
    position: 'relative',
    p: 2,
    '.discount': {
      position: 'absolute',
      backgroundColor: 'primary',
      color: '#fff',
      minHeight: 25,
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'unset',
      borderRadius: 25,
      right: 38,
      top: '-17px',
    },
    button: {
      minHeight: '48px',
      px: '25px',
      fontWeight: 500,
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  priceWrapper: {
    gap: 30,
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(4,1fr)',
      // 'repeat(4, 430px)',
      // 'repeat(4, 440px)',
      // 'repeat(4, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};

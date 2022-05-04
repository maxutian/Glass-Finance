import { useEffect, useState } from 'react';
import { Input, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Dollar from 'icons/dollar.svg';
import anime, { AnimeInstance } from 'animejs';
import './index.less';

const modulePrefix = 'login';
const Login = () => {
  const { t } = useTranslation();
  const [dollarAnimate, setDollarAnimate] = useState<AnimeInstance | null>(
    null
  );
  useEffect(() => {
    setDollarAnimate(
      anime({
        targets: document.getElementById('dollarRef'),
        easing: 'linear',
        duration: 2500,
        loop: true,
        autoplay: false,
        keyframes: [
          { background: 'linear-gradient(45deg, #123df6, #fc466b)' },
          { background: 'linear-gradient(90deg, #123df6, #fc466b)' },
          { background: 'linear-gradient(135deg, #123df6, #fc466b)' },
          { background: 'linear-gradient(180deg, #123df6, #fc466b)' },
          { background: 'linear-gradient(225deg, #123df6, #fc466b)' },
          { background: 'linear-gradient(270deg, #123df6, #fc466b)' },
          { background: 'linear-gradient(315deg, #123df6, #fc466b)' },
          { background: 'linear-gradient(360deg, #123df6, #fc466b)' },
          { background: 'linear-gradient(405deg, #123df6, #fc466b)' },
        ],
      })
    );
  }, []);

  return (
    <div className={modulePrefix}>
      <Dollar id='dollarRef' className={`${modulePrefix}-dollar`} />
      <Input
        fullWidth
        className={`${modulePrefix}-input`}
        disableUnderline
        placeholder={t('login.account')}
      />
      <Input
        fullWidth
        className={`${modulePrefix}-input`}
        disableUnderline
        placeholder={t('login.password')}
      />
      <Button
        className={`${modulePrefix}-button`}
        fullWidth
        onClick={() => dollarAnimate.play()}
      >
        {t('login.confirm')}
      </Button>
    </div>
  );
};

export default Login;

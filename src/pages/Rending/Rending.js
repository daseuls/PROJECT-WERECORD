import React, { useState } from 'react';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import Modal from '../../components/Modal/Modal';
import LoginModal from './LoginSigninModal/LoginModal';
import SignInModal from './LoginSigninModal/SignInModal';

const Rending = () => {
  const [isOn, setIsOn] = useState(false);
  const [isSignOn, setIsSignOn] = useState(false);

  // 추가정보입력 모달 띄우기
  const changeModalValue = () => {
    setIsSignOn(!isSignOn);
    setIsOn(!isOn);
  };

  const handleModal = e => {
    const clickedInside = e.target.closest('.modal');
    const clickedBtn = e.target.closest('.closeBtn');

    if (clickedInside) {
      if (clickedBtn) {
        setIsOn(false);
      }
      if (!clickedBtn) {
        return;
      }
    } else {
      setIsOn(false);
    }
  };

  const handleSignInModal = e => {
    const clickedInside = e.target.closest('.modal');
    const clickedBtn = e.target.closest('.closeBtn');

    if (clickedInside) {
      if (clickedBtn) {
        setIsSignOn(false);
      }
      if (!clickedBtn) {
        return;
      }
    } else {
      setIsSignOn(false);
    }
  };

  return (
    <Container>
      {isOn && (
        <Modal setOff={handleModal} height="300px">
          <LoginModal changeModalValue={changeModalValue} />
        </Modal>
      )}
      {isSignOn && (
        <Modal setOff={handleSignInModal} height="800px">
          <SignInModal />
        </Modal>
      )}
      <MainLogo alt="logo" src="/images/logo.png"></MainLogo>
      <FadeIn delay={600} transitionDuration={1000}>
        <SubLogo alt="sublogo" src="/images/우리는.png" />
        <SubLogo alt="sublogo" src="/images/기록합니다.png" />
      </FadeIn>
      <LoginImg
        onClick={() => setIsOn(!isOn)}
        alt="loginimg"
        src="/images/login.png"
      ></LoginImg>
    </Container>
  );
};

export default Rending;

const Container = styled.section`
  ${({ theme }) => theme.flexbox()}
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/images/mainbackground.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainLogo = styled.img`
  position: relative;
  padding-right: 50px;
  right: 10px;
  width: 330px;
`;

const SubLogo = styled.img``;

const LoginImg = styled.img`
  position: absolute;
  width: 70px;
  top: 10px;
  right: 30px;
  cursor: pointer;
`;
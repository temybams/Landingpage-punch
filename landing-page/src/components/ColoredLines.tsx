import styled from 'styled-components';

const ArtImgContainer = styled.div`
  width: 100%;
  height: 150px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  padding: 20px;
`;

const Rectangle = styled.div`
  width: 95%;
  height: 8px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 255, 0.274) 10%,
    rgba(6, 6, 117, 0.87) 0%,
    rgba(0, 0, 255, 0.276) 10%,
    transparent
  );
  transform: rotate(-2deg); /* Use transform instead of rotate */
`;

const ArtImg = () => {
  return (
    <ArtImgContainer className='art_img mt-20'>
      <Rectangle />
      <Rectangle />
      <Rectangle />
      <Rectangle />
      <Rectangle />
    </ArtImgContainer>
  );
};

export default ArtImg;

import './index.scss';

const App = () => {
  return (
    <div className="home_container">
      <section>
        <div className="video_wrapper">
          <div className="video_text">
            <div>
              <p>5대5 캐릭터 기반 전술 슈팅 게임</p>
              <p>VALORANT</p>
            </div>
            <button>무료로 플레이하기</button>
          </div>
          <video
            autoPlay
            muted
            loop
            src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce292b05bc900c63/659c99223ea361883557812f/VALORANT_EP8124_001_R007_InGameHomepage_v01_For_Website_Mobile_v2.mp4"
          ></video>
        </div>
      </section>

      <section>
        <div className="최신소식"></div>
      </section>
    </div>
  );
};

export default App;

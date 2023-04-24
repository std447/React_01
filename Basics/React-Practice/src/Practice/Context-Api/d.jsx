import { NameConsumer, CityConsumer } from "./a";

const D = () => {
  return (
    <NameConsumer>
      {(uName) => {
        return (
          <CityConsumer>
            {(uCity) => {
              return (
                <h3>
                  D inside Consumer : {uName} {uCity}
                </h3>
              );
            }}
          </CityConsumer>
        );
      }}
    </NameConsumer>
  );
};

export default D;

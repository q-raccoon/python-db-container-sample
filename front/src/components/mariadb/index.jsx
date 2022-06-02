import useMariaDb from '../../hooks/useMariadb';

const Mariadb = (props) => {
  const { data } = useMariaDb();

  return (
    <div>
      <h2>/mariadb</h2>
      <span>mariadb와 연동된 API를 수행합니다.</span>
      <br />
      <br />
      <span>조회 및 추가 기능을 테스트 합니다.</span>
      <br />
      <div>
        {data.map((item, index) => (
          <div key={index}>
            [{index}] {item.email}: {`${item.is_active}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mariadb;

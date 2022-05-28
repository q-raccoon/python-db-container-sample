import useMariaDb from '../../hooks/useMariadb';

const Mariadb = (props) => {
  const { data } = useMariaDb();

  return (
    <div>
      <h2>Mariadb</h2>
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

import useMariaDb from '../../hooks/useMariadb';

const Mariadb = (props) => {
  const { data } = useMariaDb();

  return (
    <div class="w-full bg-gray-700 mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
      <div class="w-full flex mb-4 items-center">
        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwO7Sw8L9goqQDDTvrItofVpKwbc3I2LgJFw&usqp=CAU" alt="" />
        </div>
        <div class="flex-grow pl-3">
          <h6 class="font-bold text-sm uppercase text-white">MariaDB</h6>
        </div>
      </div>
      <div class="w-full">
        <p class="text-sm leading-tight text-gray-50">
          <span class="text-lg leading-none italic font-bold mr-1">"</span>
          mariadb와 연동된 API를 수행합니다. 조회 및 추가 기능을 테스트 합니다.
          <span class="text-lg leading-none italic font-bold ml-1">"</span>
        </p>
        <div className="mt-4 text-gray-50 h-[300px] overflow-y-scroll">
          {data.map((item, index) => (
            <div key={index}>
              [{index}] {item.email}: {`${item.is_active}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mariadb;

import useMongodb from '../../hooks/useMongodb';

const Mongodb = (props) => {
  const { data, addData } = useMongodb();

  return (
    <div class="w-full bg-gray-700 mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
      <div class="w-full flex mb-4 items-center">
        <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <img src="data:image/png;base64,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" alt="" />
        </div>
        <div class="flex-grow pl-3">
          <h6 class="font-bold text-sm uppercase text-white">Mongodb</h6>
        </div>
      </div>
      <div class="w-full">
        <p class="text-sm leading-tight text-gray-50">
          <span class="text-lg leading-none italic font-bold mr-1">"</span>
          mongodb와 연동된 API를 수행합니다. 조회 및 추가 기능을 테스트 합니다.
          <span class="text-lg leading-none italic font-bold ml-1">"</span>
        </p>
        <div className="mt-4 text-gray-50 h-[300px] overflow-y-scroll">
          {data.data.map((item, index) => (
            <div key={index}>
              [{index}] {item.author}: {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Mongodb;

import useRedis from '../../hooks/useRedis';

const Redis = (props) => {
  const {histories, fetchData}= useRedis();
  console.log(histories)
  return (
    <div className="w-full bg-gray-700 mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
    <div className="w-full flex mb-4 items-center">
      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqRd7RMOXBj4m4KtBD9Pr2QoCNAgRWes6HA&usqp=CAU" alt="" />
      </div>
      <div className="flex-grow pl-3">
        <h6 className="font-bold text-sm uppercase text-white">redis</h6>
      </div>
    </div>
    <div className="w-full">
      <p className="text-sm leading-tight text-gray-50">
        <span className="text-lg leading-none italic font-bold mr-1">"</span>
        1분동안 최대 10번의 요청만 하용하는 API를 테스트합니다. 해당 기능은 redis 캐싱기능을 활용하여 구현되어 있습니다.
        <span className="text-lg leading-none italic font-bold ml-1">"</span>
      </p>
      <button onClick={fetchData}>request</button>

      <div className="mt-4 h-[260px] overflow-y-scroll">
        <table className="w-full mt-4">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3">Host</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 ">
            {histories.map((history, idx) => (
              <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img className="object-cover w-full h-full rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAAeHh67u7vu7u5ra2vPz88+Pj7V1dV9fX2enp5WVlZhYWFLS0vc3Nz7+/svLy/m5uarq6tRUVE5OTl3d3clJSXv7+8YGBiysrKoqKjJyclwcHAaGhqVlZULCwu4uLiLi4s8PDyDg4MrKyuglr1kAAAEVUlEQVR4nO2da3vaMAxGEy6BknIrlJRLCx38/9+4lUub7FlkyXax1L3n65zEpyZxLGVWlgEAAAAAAAAAAAAAcF8mo3FHNatyMw/wW89yC4y3nn7zRequs9lNfQSL1N2W8Nr74YJ/EN+N89Q9lrKS/lDHqXss5lkm+JS6vx4MRYar1N31oJQIWnvMXJA8T99Sd9aLg8BwkLqzXuwEhvvUnfViLDBM3Vc//A17VU8nVRHJUHDgnZnAsBUYagGG7cBQCzBsB4ZagGE7MNRCMyK4EBxpwXAy6pfNiOBLSbLr1mKq+g39UiplcTteu+HQO2XUry5nUG4YEs3tTM6n0G24CRDMrxkO1YbdMME8//ihajbshQqeg+OaDR+DDfODasMYab+BasP3CIb5RLNhlI8nRooN4+Smx4oN4+T99j/eMFdsuG30bDEZcjFj2BzDR/6BMFQDDFuBoRpg2AoM1QDDVmCoBhi2YtRwdnzgYtTQGxgmBIYwhGF6YAhDGKYHhjC0ZjjusjFq+PPXhzCsAUM1wLAVGKoBhq3AUA0wbAWGamga/tqMuBg19AaGCYEhDGGYHhjCEIbpgSEMYZgeGMIQhumBIQxhmB4YwhCG6Rn+u8eBhvwPj76fSLtUG91HWAAM7QND+8DQPjC0DwztA0P7mDZcluWLs5Fhw4dzwaChqyBX5v4jKOVzF13HOjKzUxewSa0Q4jPZMBuR/6yWRjkksuVfO4GboVF5jfydGi1p1anqhluqaYS9elMwa5RAJKNyWZS9bO+OzHBqccJoVOok98T+aGCuTGf+sbVsDfJRcm4xP92rY9HY1yog0k+SS5vpA9lII4NPQcd899msb61M4Ok6Jbp23v8a62p77Aey6xBXWu6EZytdjuVovX5fulplMZlSV5pJzxYr9xQT+m5+Ep4tVv4wIo6N/k/CUswKDV0PZOEg6jN0vjh0rBu651TZIKoz5Lz72TY8Mq4mGkRthhXnaivLhnQ46IZkEJUZMoveSOZEZYbcxcnaqiF7Eb23ashfX/LvRLdhZ+lcWcQyFJSeeolm+FhU02nv4Kq3E8dQEiJgD6LD8HZHT3d3MGTNhTdW3McpbVh7ZNHh0CiGsigPdxBJw/omEuTCO4qhMBp5imFY1FuSL4wxDKWBOuYgUoavjbwFGU6MICgPKIcbyqL6ochjrbxBVGPoUYaRt8Qg78NG3mL9vYa8RUUT1iCSho0zkJn6YEGvSpqsJQZpWJ9V6Ykz2NAv48FZYtAd/5oQe1SkPdzQMzPHeTt1vLUtrhPG1pH+DDV8mw18OHWDDfP8+VAUG+fXMqGG34iu9eF3EKuGpV7ifOkzcF8oHVFy72+pLSg4MWYnhfs66YiRIhXnZe+L69NRBtK07J0J/9BnnFrBBfmxE4e5+xqJCXzYqH7MXAn6r7IWBLOs6/1d4UL/T/RC9e7ldxLkgNKzPS5fOxLGo0nqPgMAAAAAAAAAAACA/47fJqJvKEx1hxUAAAAASUVORK5CYII=" alt="" loading="lazy" />
                      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p className="font-semibold">{history.host}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{history.host}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs">
                  {
                    history.status
                      ? <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                      : <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> Denied </span>
                  }
                </td>
                <td className="px-4 py-3 text-sm">{history.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default Redis;

import DayData from "../../utils/Data/dayData";
import EvenningBatchData from "../../utils/Data/evenningBatchData"
import EvenningTimeData from "../../utils/Data/evenningTimeData"
import MornningBatchData from "../../utils/Data/mornningBatchData";
import MornningTimeData from "../../utils/Data/mornningTimeData";
import MorningImage from '../../utils/Images/morning.png'
import FullSun from '../../utils/Images/fullsun.png'


const Table = () => {
  return (
    <>
      <div style={{overflow: "auto" }} className="ml-4">
      <table className="table-auto">
          <thead>
            {DayData.map((item, index) => (
              <tr class="text-md font-semibold  text-left text-gray-900  uppercase border-b border -gray-600   bg-gray-200  p-auto">
                 <div >
                <th class="px-4   py-3 text-center   border border-gray-400  ">Batch Codes</th>
                      </div>
                <th class="px-4 py-3 text-center  border border-gray-400 ">{item.Day1}</th>
                <th class="px-4 py-3 text-center border border-gray-400 ">{item.Day2}</th>
                <th class="px-4 py-3 text-center border border-gray-400">{item.Day3}</th>
                <th class="px-4 py-3 text-center border border-gray-400 ">{item.Day4}</th>
                <th class="px-4 py-3 text-center border border-gray-400 ">{item.Day5}</th>
                <th class="px-4 py-3 text-center border border-gray-400 ">{item.Day6}</th>
              </tr>
            ))}
          </thead>
  
          <tbody>
            <tr>
              <td class="  px-14  border border-gray-400 ">
                <div>
                  <p class="font-semibold text-black text-center text-sm 	">

                  <img src={MorningImage} alt="" />
                  </p>
                </div>
              </td>
              {MornningTimeData.map((item, index) => (
                <td class=" border border-gray-400">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class=" border border-gray-400 "
                        style={{ width: "125px" }}
                      >
                        <th class=" py-2">{item.MornningTime1}</th>
                      </div>
                      <div class="border border-gray-400 " style={{ width: "125px" }}>
                        <th class=" py-2">{item.MornningTime2}</th>
                      </div>
                      <div class="border border-gray-400 " style={{ width: "125px" }}>
                        <th class=" py-2">{item.MornningTime3}</th>
                      </div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {MornningBatchData.map((item, index) => (
              <tr>
                <td class="px-4 py-3 border border-gray-400">
                  <div>
                    <p class="font-semibold text-black text-center text-sm 	">
                      {item.BatchCode1}
                    </p>
                  </div>
                </td>{" "}
                <td class="border border-black">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class=" border border-gray-400bg-teal-300"
                        style={{ width: "125px", height: "90px" }}
                      >
                        <th >
                          <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>
                              <img
                          class= "rounded-full"
                            src={item.mon.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                             
                            }}
                          ></img>{" "}
                          </div>
                        
                         <p >{item.mon.subject1.subject1} </p> 
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                           <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                           class= "rounded-full"
                            src={item.mon.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img>
                          </div>
                          {item.mon.subject2.subject2}
                        </th>
                      </div>
                      <div class="bg-yellow-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                         <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img src= {item.mon.subject3.img} 
                        class= "rounded-full"
                        style={{
                            width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}></img>
                            </div>
                            {item.mon.subject3.subject3}</th>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="border border-gray-400">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class=" bg-teal-300 border border-gray-400"
                        style={{ width: "125px", height: "90px" }}
                      >
                        <th class=" ">
                          <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Tue.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img>
                          </div>
                          {item.Tue.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Tue.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Tue.subject2.subject2}
                        </th>
                      </div>
                      <div class="bg-yellow-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img src= {item.Tue.subject3.img}class= "rounded-full" style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}></img></div>
                            {item.Tue.subject3.subject3}</th>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="border border-gray-400">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "125px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Wen.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Wen.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Wen.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Wen.subject2.subject2}
                        </th>
                      </div>
                      <div class="bg-yellow-300 border border-gray-400"  style={{ width: "125px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img src= {item.Wen.subject3.img} class= "rounded-full" style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}></img>
                            </div>{item.Wen.subject3.subject3}</th>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="border border-gray-400">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "125px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Thus.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Thus.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Thus.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Thus.subject2.subject2}
                        </th>
                      </div>
                      <div class="bg-yellow-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img src= {item.Thus.subject3.img} class= "rounded-full" style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}></img>
                            </div>{item.Thus.subject3.subject3}</th>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="border border-black">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "125px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Fri.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Fri.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400 " style={{ width: "125px" }}>
                        <th class="  ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Fri.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Fri.subject2.subject2}
                        </th>
                      </div>
                      <div class="bg-yellow-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img src= {item.Fri.subject3.img} class= "rounded-full" style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}></img>
                            </div>{item.Fri.subject3.subject3}</th>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="border border-gray-400">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "125px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Sat.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Sat.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Sat.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Sat.subject2.subject2}
                        </th>
                      </div>
                      <div class="bg-yellow-300 border border-gray-400" style={{ width: "125px" }}>
                        <th class="  ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img src= {item.Sat.subject3.img} class= "rounded-full" style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}></img></div>
                            {item.Sat.subject3.subject3}</th>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}

            {/* *************** */}
            <tr>
              <td class="px-14  border border-gray-400  ">
                <div class= " " style={{width:"40px"}} >
                  <img src={FullSun} alt="" />
                </div>
              </td>
              {EvenningTimeData.map((item,index)=>(
                <td class="border border-black">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class=" border border-gray-400"
                        style={{ width: "187px" }}
                      >
                        <th class=" py-2">{item.EvenningTime1}</th>
                      </div>
                      <div class="border border-gray-400" style={{ width: "187px" }}>
                        <th class=" py-2">{item.EvenningTime2}</th>
                      </div>
                     
                    </div>
                  </div>
                </td>
              ))}
            </tr>
            {EvenningBatchData.map((item, index) => (
              <tr>
                <td class="px-4 py-3   border border-gray-400">
                  <div>
                    <p class="font-semibold text-black text-center text-sm 	">
                      {item.BatchCode1}
                    </p>
                  </div>
                </td>{" "}

                <td class="border border-gray-400">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "187px", height: "90px" }}
                      >
                        <th class="">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          
                          class= "rounded-full"
                            src={item.mon.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img>
                          </div>
                          {item.mon.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "187px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.mon.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.mon.subject2.subject2}
                        </th>
                      </div>
                     
                    </div>
                  </div>
                </td>
                <td class="border border-gray-400">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "187px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Tue.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Tue.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300  border border-gray-400" style={{ width: "187px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Tue.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Tue.subject2.subject2}
                        </th>
                      </div>
                     
                    </div>
                  </div>
                </td>
                <td class="border border-black">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "187px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Wen.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Wen.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "187px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Wen.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Wen.subject2.subject2}
                        </th>
                      </div>
                     
                    </div>
                  </div>
                </td>
                <td class="border border-gray-400">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "187px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Thus.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Thus.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "187px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Thus.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Thus.subject2.subject2}
                        </th>
                      </div>
                     
                    </div>
                  </div>
                </td>
                <td class="border border-black">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300 border border-gray-400"
                        style={{ width: "187px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Fri.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Fri.subject1.subject1}
                        </th>
                      </div>
                      <div class=" bg-indigo-300 border border-gray-400" style={{ width: "187px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Fri.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Fri.subject2.subject2}
                        </th>
                      </div>
                     
                    </div>
                  </div>
                </td>
                <td class="border border-black">
                  <div class="flex " style={{ marginLeft: "22px" }}>
                    <div class="flex text-center  ">
                      <div
                        class="bg-teal-300  border border-gray-400"
                        style={{ width: "187px", height: "90px" }}
                      >
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Sat.subject1.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img></div>
                          {item.Sat.subject1.subject1}
                        </th>
                      </div>
                      <div class="bg-indigo-300 border border-gray-400" style={{ width: "187px" }}>
                        <th class=" ">
                        <div style={{width:"100px" , height:"50px",  margin:"auto", marginTop:"8px"}}>

                          <img
                          class= "rounded-full"
                            src={item.Sat.subject2.img}
                            style={{
                              width: "50px",
                              margin: "auto",
                              // marginTop: "10px",
                            }}
                          ></img>
                          </div>
                          {item.Sat.subject2.subject2}
                        </th>
                      </div>
                     
                    </div>
                  </div>
                </td>
           
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

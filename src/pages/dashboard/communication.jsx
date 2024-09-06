import {
  addfileicon,
  callsupporticon,
  darksearchicon,
  sendicon,
} from '@/assets';
import { driversData, parentsData } from '@/data';
import { Button, Tab, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Communication() {
  const [selectedBus, setSelectedBus] = useState('A');
  const [activeTab, setActiveTab] = useState('allstudents');
  const [messages, setMessages] = useState([]);

  const tabs = [
    { label: 'Parents', value: 'allstudents' },
    { label: 'Drivers', value: 'drivers' },
  ];

  const currentData = activeTab === 'allstudents' ? parentsData[selectedBus] : driversData[selectedBus];

  return (
    <section>
      <div className='md:my-7 mt-4 flex justify-between flex-wrap items-center md:space-y-0 space-y-4'>
        <h1 className='font-bold text-[24px] md:text-[32px] text-[#202224]'>Communication</h1>
        <Link to={`#`}>
          <Button className="md:mb-0 mb-8 bg-[#C01824] capitalize font-semibold text-[14px] w-[220px] rounded-[6px] opacity-100">
            <img src={callsupporticon} className="inline-block h-[22px] w-[22px] mr-2" /> Chat with Bus Team
          </Button>
        </Link>
      </div>
      <div className='flex space-x-0 md:space-x-5 h-full'>
        <div className='bg-white w-full max-w-[300px] rounded-[12px] border shadow-sm pt-2 capitalize md:block hidden'>
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className: "bg-transparent border-b-2 border-[#C01824] shadow-none rounded-none",
              }}
            >
              {tabs.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "font-bold text-[#C01824]" : ""}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <div className="relative flex items-center">
              <img src={darksearchicon} alt='' className="absolute left-3 h-4 w-4" />
              <input
                className="bg-[#D2D2D2]/30 w-full pl-10 p-3 outline-none border-0"
                type="search"
                placeholder="Search"
              />
            </div>
            <TabsBody className='pt-2'>
              {currentData.map(({ name, busNo, imgSrc, timestamp, count }, index) => (
                <div key={index}>
                  <Button
                    variant='gradient'
                    className="flex items-center gap-3 py-3 pl-4 w-full bg-none shadow-none rounded-none hover:bg-[#F9E8E9] group transition-all"
                  >
                    <img src={imgSrc} alt={name} className="rounded-full w-[42px] h-[42px]" />
                    <div className='text-start text-[#141516] w-full'>
                      <div className='flex justify-between text-[#141516]'>
                        <h6 className="font-bold text-[13px] capitalize">{name}</h6>
                        <span className="text-[#627D98] text-[12px] text-end">{timestamp}</span>
                      </div>
                      <div className='flex justify-between w-full'>
                        <p className="font-medium pt-1 text-[#334E68] text-[13px] capitalize">{busNo}</p>
                        {count === 1 &&
                          <div className='rounded-[12px] bg-[#C52707] justify-center items-center self-center' style={{ minWidth: 16, height: 17 }}>
                            <p className='text-[#fff] text-[9px] text-center'>{count}</p>
                          </div>
                        }
                      </div>
                    </div>
                  </Button>
                </div>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        <div className='bg-white w-full rounded-[12px] border shadow-sm'>
          <Link to={`#`} className='flex justify-end items-end pr-2 pt-2'>
            <Button className="bg-[#C01824] capitalize font-medium md:text-[14px] md:w-[130px] w-[120px] rounded-[6px] shadow-lg opacity-100 mb-3 md:mb-0">
              Add Bus TM
            </Button>
          </Link>
          <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-[700px]">
            <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
              <p className='text-[14px] text-[#243B53] text-center font-medium'>Today 10:27am</p>
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-2 items-start">
                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F9E8E9] text-[#102A43]">Can be verified on any platform using docker</span>
                  </div>
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#C01824] text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span></div>
                  </div>
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-2 text-[#102A43] items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-[#F9E8E9]">Command was run with root privileges. I'm sure about that.</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-[#F9E8E9]">I've update the description so it's more obviously now</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-[#F9E8E9]">FYI https://askubuntu.com/a/700266/510172</span></div>
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F9E8E9] text-[#102A43]">
                        Check the line above (it ends with a # so, I'm running it as root )
                        <pre># npm install -g @vue/devtools</pre>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#C01824] text-white ">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span></div>
                  </div>
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F9E8E9] text-[#102A43]">Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)</span></div>
                  </div>
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-[#C01824] text-white ">Are you using sudo?</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#C01824] text-white ">Run this command sudo chown -R whoami /Users/your_user_profile/.npm-global/ then install the package globally without using sudo</span></div>
                  </div>
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-[#F9E8E9] text-[#102A43]">It seems like you are from Mac OS world. There is no /Users/ folder on linux ?</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F9E8E9] text-[#102A43]">I have no issue with any other packages installed with root permission globally.</span></div>
                  </div>
                </div>
              </div>
              {/* <p className='text-xs md:text-[14px] text-[#243B53] text-center font-medium'>Today 10:30am</p> */}
              <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-[#C01824] text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
                  </div>
                </div>
              </div>
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs md:text-[13.5px] max-w-sm mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-[#F9E8E9] text-[#102A43]">I get the same error on Arch Linux (also with sudo)</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-[#F9E8E9] text-[#102A43]">I also have this issue, Here is what I was doing until now: #1076</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F9E8E9] text-[#102A43]">even i am facing</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
              <div className="flex space-x-2">
                <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-200 focus:outline-none">
                  <img src={addfileicon} alt='' className="md:h-[26px] md:w-[26px] text-[#102A43]" />
                </button>
                <input type="text" placeholder="Message" className="w-full focus:outline-none bg-[#F0F4F8] rounded-lg focus:placeholder-gray-400 text-[#102A43] placeholder-gray-500 pl-4 py-2" />
                <Button size='lg' type="submit" className="inline-flex ml-3 items-center justify-center rounded-md px-7 py-2 transition duration-500 ease-in-out text-white bg-[#C01824] hover:opacity-80 focus:outline-none">
                  <span className="font-normal capitalize text-xs md:text-[12px]">Send</span>
                  <img src={sendicon} alt='' className="h-[14px] w-[12px] transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {selectedBus && selectedBus.length > 0 && (
        <div className='absolute left-[350px]'>
          <div className='bg-white rounded-lg p-4 shadow-md flex gap-2 items-center'>
            <img
              src={selectedBus.imgSrc}
              alt={selectedBus.name}
              className="w-[42px] h-[42px] rounded-full"
            />
            <div>
              <h4 className='font-bold'>{selectedBus.name}</h4>
              <p className='text-[#334E68]'>{selectedBus.busNo}</p>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}

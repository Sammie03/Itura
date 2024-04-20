"use client"
import { useState } from 'react'
import { Input } from 'antd'
import Image from 'next/image'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import hospitalWard from '@/public/images/hospital-ward.jpeg'
import { healthCareList } from './hospitalData';
import './services.scss'

const { Search } = Input;

export default function Services() {

  const [searchParams, useSearchParams] = useState('');

  const onChangeHandler = (event: { target: { value: string } }) => {
    let searchParams = event.target.value.toLocaleLowerCase()
    useSearchParams(searchParams)
  }

  // const hospitalDetailsList = healthCareList.map(hospital => `${hospital.name}, ${hospital.location}`);

  const hospitalDetailsList = healthCareList.map(hospital => `${hospital.name}, ${hospital.location}`);

  const filteredHospitalDetailsList = healthCareList.filter((hospital) => {
    const hospitalName = hospital.name.toLocaleLowerCase().includes(searchParams)
    const hospitalLocation = hospital.location.toLocaleLowerCase().includes(searchParams)

    return hospitalName || hospitalLocation
  })

  return (
    <section className='zigzag-container'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-6" id='healthcares'>
            <h1 className="h2">Find the nearest health care to you</h1>
            <p className="text-xl text-gray-400">
              Conduct a search to find the nearest health care center located in proximity to your current location.
            </p>
          </div>
          <div style={{ width: '100%' }} data-aos="fade-up">

            <div className="healthcare-searchbox">
              <Search
                className='select-dropdown'
                placeholder="Search health care or location"
                size="large"
                onChange={onChangeHandler}
              />
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                Faster Service, Reduced Stress</div>
            </div>

          </div>


          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16 hospital-list-container">

                  <ul className="text-lg text-gray-400 -mb-2 mt-5">
                    {filteredHospitalDetailsList.map(healthcare => {
                      return (
                        <li className="flex items-center mb-2 mt-5" key={healthcare.id}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" width="24" height="24">
                            <rect x="14" y="8" width="4" height="16" fill="#7B61FF" />
                            <rect x="8" y="14" width="16" height="4" fill="#7B61FF" />
                          </svg>
                          {healthcare.name !== '' ? (
                            <span className='health-care-list'>{`${healthcare.name}, ${healthcare.location}`}</span>
                          ) : (
                            <span style={{color: 'white'}}>Healthcare not found</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" id='diettracker'>
              <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
              <h1 className="h2">Monitor your dietary intake</h1>
              <p className="text-xl text-gray-400">Your diet is a bank account. Good food choices are good investments.</p>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <div className="container landing-page-bg-panel py-5">
                  <div className="main-demo mx-auto">
                    <div className="demo-title">
                      <p className="p-2 m-0">Live API Demo</p>
                    </div>
                    <br />
                    <div className="pt-3 px-3">
                      <ul className="nav nav-pills main-nav-selection m-auto" id="pills-tab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link main-nav nav-item-left active" id="tab-one" data-toggle="pill" href="#one" role="tab" aria-selected="true">Text Input</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link main-nav nav-item-center" id="tab-two" data-toggle="pill" href="#two" role="tab" aria-selected="false">Image Text</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link main-nav nav-item-right" id="tab-three" data-toggle="pill" href="#three" role="tab" aria-selected="false"><div className="new-box"></div>Recipes</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content pb-3 px-3">
                      <div aria-labelledby="tab-one" className="text-center tab-pane fade show active" role="tabpanel" id="one">
                        <div className="input-group demo-input my-4">
                          <input type="text" id="demo-input" className="form-control query-input" placeholder="Enter some text to calculate nutrition information." value="Last night we ordered a 14oz prime rib and mashed potatoes." />
                        </div>
                        <div className="demo" id="text-demo" style={{ display: "none" }}>
                          <div style={{ margin: "20px" }}>
                            <h3>Nutrition Results</h3>
                          </div>
                          <table className="table table-striped">
                            <thead className="thead-dark">
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Serving Size</th>
                                <th scope="col">Calories</th>
                                <th scope="col">Total Fat</th>
                                <th scope="col">Saturated Fat</th>
                                <th scope="col">Cholesterol</th>
                                <th scope="col">Sodium</th>
                                <th scope="col">Carbohydrates</th>
                                <th scope="col">Fiber</th>
                                <th scope="col">Sugar</th>
                                <th scope="col">Protein</th>
                              </tr>
                            </thead>
                            <tbody id="result">
                            </tbody>
                          </table>
                        </div>
                        <button type="button" id="submit" className="m-3 btn btn-success">Get Nutrition</button>
                      </div>

                      <div aria-labelledby="tab-two" className="tab-pane fade" id="two" role="tabpanel">
                        <div>
                          <div className="image-upload">
                            <form>
                              <div className="custom-file file">
                                <input type="file" className="custom-file-input" name="file" id="file" accept="image/png,image/jpeg" />
                                <label className="custom-file-label image-input" htmlFor="file">Upload image with food text</label>
                              </div>
                            </form>
                          </div>
                          <div id="image-demo-container" className="demo" style={{ display: "none" }}>
                            <div className="original-image-div">
                              <h3>Original Image</h3>
                              <div id="original-div" style={{ display: "none" }}>
                                <img id="image" className="img-main" />
                              </div>
                            </div>
                            <div id="image-demo" style={{ display: "none" }}>
                              <h3>Nutrition Results</h3>
                              <table className="table table-striped">
                                <thead className="thead-dark">
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Serving Size</th>
                                    <th scope="col">Calories</th>
                                    <th scope="col">Total Fat</th>
                                    <th scope="col">Saturated Fat</th>
                                    <th scope="col">Cholesterol</th>
                                    <th scope="col">Sodium</th>
                                    <th scope="col">Carbohydrates</th>
                                    <th scope="col">Fiber</th>
                                    <th scope="col">Sugar</th>
                                    <th scope="col">Protein</th>
                                  </tr>
                                </thead>
                                <tbody id="image-result">
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <button type="button" id="submit-image" className="btn btn-success m-3">Get Nutrition</button>
                        </div>
                      </div>

                      <div aria-labelledby="tab-three" className="text-center tab-pane fade show" role="tabpanel" id="three">
                        <div className="input-group demo-input my-4">
                          <input type="text" id="demo-input-recipe" className="form-control query-input" placeholder="Enter a dish." value="Jollof rice" />
                        </div>
                        <div className="demo" id="recipe-demo" style={{ display: "none" }}>
                          <div style={{ margin: "20px" }}>
                            <h3 id="result-recipe-title"></h3>
                          </div>
                          <div id="result-recipe">
                          </div>
                        </div>
                        <button type="button" id="submit-recipe" className="btn btn-success m-3">Get Recipes</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Don't eat less, eat right</div>
                  <h3 className="h3 mb-3">A healthy outside starts from the inside</h3>
                  <p className="text-xl text-gray-400 mb-4">A balanced diet is crucial for maintaining overall health and well-being. Nutrient-rich foods provide the vitamins, minerals, and antioxidants necessary for optimal bodily function and disease prevention.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Nutrient Tracking</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Goal Setting and Monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Weight Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={hospitalWard} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" id="aboutus">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Your health, Our Priority</div>
                  <h3 className="h3 mb-3">We put your health first</h3>
                  <p className="text-xl text-gray-400 mb-4">At Itura, we believe that everyone deserves access to high-quality healthcare that prioritizes compassion, expertise, and innovation. Founded on the principle of putting patients first, we are dedicated to providing comprehensive healthcare services tailored to meet the unique needs of each individual.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Comprehensive Care</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Expertise and Experience</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Convenience and Accessibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

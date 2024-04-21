"use client"
import { useState } from 'react'
import { ConfigProvider, Input, TabsProps, Tabs, Button } from 'antd'
import Image from 'next/image'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import hospitalWard from '@/public/images/hospital-ward.jpeg'
import { healthCareList } from './hospitalData';
import './services.scss';
import ModalComp from './modal';
import { DataType } from './modal';

const { Search } = Input;

interface FoodItem {
  name: string;
  calories: number;
  serving_size_g: number;
  fat_total_g: number;
  fat_saturated_g: number;
  protein_g: number;
  sodium_mg: number;
  potassium_mg: number;
  cholesterol_mg: number;
  carbohydrates_total_g: number;
  fiber_g: number;
  sugar_g: number;
}

const mapFoodItemToDataType = (item: FoodItem): DataType => {
  return {
    key: item.name,
    name: item.name,
    servingSize: `${item.serving_size_g} g`,
    calories: `${item.calories} cal`,
    totalFat: `${item.fat_total_g} g`,
    saturatedFat: `${item.fat_saturated_g} g`,
    cholesterol: `${item.cholesterol_mg} mg`,
    sodium: `${item.sodium_mg} mg`,
    carbohydrates: `${item.carbohydrates_total_g} g`,
    fiber: `${item.fiber_g} g`,
    sugar: `${item.sugar_g} g`,
    protein: `${item.protein_g} g`,
  };
};

export default function Services() {

  const [searchParams, useSearchParams] = useState('');

  const [formData, setFormData] = useState({ food: 'Jollof Rice', recipe: 'Jollof Rice' });

  const [activeTab, setActiveTab] = useState('FoodInput')

  const [loadingFood, setLoadingFood] = useState(false);

  const [loadingImg, setLoadingImg] = useState(false);

  const [loadingRecipe, setLoadingRecipe] = useState(false);

  const [dataFood, setDataFood] = useState<FoodItem[]>();

  const [dataRecipe, setDataRecipe] = useState();

  const [dataImg, setDataImg] = useState<FoodItem[]>();

  const dataFoodItems: DataType[] | undefined = dataFood?.map(mapFoodItemToDataType);

  const dataImageItems: DataType[] | undefined = dataImg?.map(mapFoodItemToDataType);

  const { food, recipe } = formData;

  const [errors, setErrors] = useState({
    food: '',
    recipe: ''
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  }

  const handleTabChange = (activeKey: any) => {
    setActiveTab(activeKey);
  };

  const handleSubmit = async (e: any) => {

    e.preventDefault();

    // console.log(`see active tab: ${activeTab}`)

    if (activeTab === 'foodInput') {
      setLoadingFood(true);

      const fetchData = async () => {
        try {
          const apiKey = '5tElBoW8Jr+csLmDEd5szQ==To42nfpMqh6El6xu'
          const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${food}`, {
            headers: {
              'x-api-key': apiKey,
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const json = await response.json();
          // console.log(json, 'see Json')
          setDataFood(json.items);
          setModalVisible(true);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoadingFood(false);
          console.log(dataFood, 'see food data')
        }
      };

      fetchData();
    };


    if (activeTab === 'recipeInput') {
      setLoadingRecipe(true);

      const fetchData = async () => {
        try {
          const apiKey = '5tElBoW8Jr+csLmDEd5szQ==To42nfpMqh6El6xu'
          const response = await fetch(`https://api.calorieninjas.com/v1/recipe?query=${recipe}`, {
            headers: {
              'x-api-key': apiKey,
            },
            mode: 'no-cors'
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const json = await response.json();
          console.log(json, 'see Json')
          setDataRecipe(json);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoadingRecipe(false);
          console.log(dataRecipe, 'see recipe data')
        }
      };

      fetchData();
    };


    if (activeTab === 'imageInput') {
      setLoadingImg(true);

      const imgData = new FormData();
      const fileField = document.querySelector('input[type="file"]');
      if (fileField instanceof HTMLInputElement && fileField.files && fileField.files.length > 0) {
        imgData.append("imageFile", fileField.files[0]);

        const fetchData = async () => {
          try {

            const apiKey = '5tElBoW8Jr+csLmDEd5szQ==To42nfpMqh6El6xu'
            const response = await fetch(`https://api.calorieninjas.com/v1/imagetextnutrition`, {
              method: 'POST',
              body: imgData,
              headers: {
                'x-api-key': apiKey,
              },
              // mode: 'no-cors'
            });

            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const json = await response.json();
            // console.log(json, 'see Json')
            setDataImg(json.items);
            setModalVisible(true);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoadingImg(false);
            console.log(dataImg, 'see img data');
          }
        };

        fetchData();
      } else {
        console.error('File input element not found or no file selected.');
        setLoadingImg(false);
      }

    };

  }


  const onChangeHandler = (event: { target: { value: string } }) => {
    let searchParams = event.target.value.toLocaleLowerCase()
    useSearchParams(searchParams)
  }

  const items: TabsProps['items'] = [
    {
      key: 'foodInput',
      label: <p className='tab-title'>Food Input</p>,
      children:
        <div className='tab-one-container'>
          <input
            className="tab-input"
            type="text"
            id="food"
            name="food"
            value={food}
            required
            placeholder='Enter food to get nutrition composition'
            color='#fff'
            onChange={handleChange}
          />

          <button className="find-health-care-btn mb-4 sm:w-auto sm:mb-0" onClick={handleSubmit}>
            {!loadingFood ? 'Get Nutrition' : 'Fetching...'}
          </button>
        </div>,
    },
    {
      key: 'imageInput',
      label: <p className='tab-title'>Image Input</p>,
      children:
        <div className='tab-two-container'>

          <input
            type="file"
            className="tab-input"
            id="imageFile"
            name='imageFile'
            accept="image/png,image/jpeg"
          // placeholder='Upload Image containing food text'
          />

          <button className="find-health-care-btn w-full mb-4 sm:w-auto sm:mb-0" onClick={handleSubmit}>
            {!loadingImg ? 'Get Nutrition' : 'Fetching...'}
          </button>
        </div>,
    },
    {
      key: 'recipeInput',
      label: <p className='tab-title'>Get Recipes</p>,
      children:
        <div className='tab-three-container'>
          <input
            className="tab-input"
            type="text"
            id="recipe"
            name="recipe"
            value={recipe}
            required
            placeholder='Enter food to get recipes'
            onChange={handleChange}
          />
          <button className="find-health-care-btn w-full mb-4 sm:w-auto sm:mb-0" onClick={handleSubmit}>
            {!loadingRecipe ? 'Get Recipes' : 'Fetching...'}
          </button>
        </div>,
    },
  ];

  // const hospitalDetailsList = healthCareList.map(hospital => `${hospital.name}, ${hospital.location}`);

  const hospitalDetailsList = healthCareList.map(hospital => `${hospital.name}, ${hospital.location}`);

  const filteredHospitalDetailsList = healthCareList.filter((hospital) => {
    const hospitalName = hospital.name.toLocaleLowerCase().includes(searchParams)
    const hospitalLocation = hospital.location.toLocaleLowerCase().includes(searchParams)

    return hospitalName || hospitalLocation
  })

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemActiveColor: 'rgb(93 93 255)',
            itemColor: 'rgba(255, 255, 255, 0.9)',
            itemHoverColor: 'rgb(93 93 255)',
            itemSelectedColor: 'rgb(93 93 255)',
            // cardBg: '',
            inkBarColor: '#7d2ae8'
          },
        },
      }}
    >
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
                              <span style={{ color: 'white' }}>Healthcare not found</span>
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
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up"
                // style={{ border: '1px solid red' }}
                >
                  <Tabs
                    defaultActiveKey="foodInput"
                    type="card"
                    size={'large'}
                    items={items}
                    animated={true}
                    centered={true}
                    tabBarGutter={15}
                    onChange={handleTabChange}
                  />

                  <ModalComp
                    title={activeTab === 'recipeInput' ? `Recipe for ${recipe}` : activeTab === 'foodInput' ? `Nutrition Composition of ${food}` : 'Nutrition Composition'}
                    tableData={activeTab === 'recipeInput' ? dataRecipe : activeTab === 'foodInput' ? dataFoodItems : dataImageItems}
                    visible={modalVisible}
                    onClose={handleCloseModal}
                  />

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
    </ConfigProvider>
  )
}

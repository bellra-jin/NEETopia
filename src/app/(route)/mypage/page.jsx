
"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";

function transformSiteData(data) {
    if (!data || data.length === 0) return [];
    const [siteData] = data;
    return [
        { name: siteData.site1Name.trim(), link: siteData.site1 },
        { name: siteData.site2Name.trim(), link: siteData.site2 },
        { name: siteData.site3Name.trim(), link: siteData.site3 },
    ];
}

export default function MyPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [siteRecommendations, setSiteRecommendations] = useState([]);
    const [careerRecommendation, setCareerRecommendation] = useState(null);
    const [integratedCareerRecommendation, setIntegratedCareerRecommendation] = useState(null);
    const [publicApiData, setPublicApiData] = useState([]);
    const [areas, setAreas] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [subSubcategories, setSubSubcategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 9;

    const [loading, setLoading] = useState({
        userData: true,
        siteRecommendations: true,
        careerRecommendation: true,
        integratedCareerRecommendation: true,
        publicApi: true,
    });

    const [errors, setErrors] = useState({
        siteRecommendations: false,
        careerRecommendation: false,
        integratedCareerRecommendation: false,
    });

    const [searchParams, setSearchParams] = useState({
        startDate: "",
        endDate: "",
        srchTraArea1: "",
        srchNcs1: "",
        srchNcs2: "",
        srchNcs3: "",
        keyword: "",
    });

    const fetchAsynchronousData = async () => {
        try {
            const sitePromise = axiosInstance
                .get("/meetup/record/recommend-sites")
                .then((response) => {
                    setSiteRecommendations(transformSiteData(response.data));
                })
                .catch(() => setErrors((prev) => ({ ...prev, siteRecommendations: true })))
                .finally(() => setLoading((prev) => ({ ...prev, siteRecommendations: false })));

            const careerPromise = axiosInstance
                .get("/career-recommendation")
                .then((response) => {
                    setCareerRecommendation(response.data);
                })
                .catch(() => setErrors((prev) => ({ ...prev, careerRecommendation: true })))
                .finally(() => setLoading((prev) => ({ ...prev, careerRecommendation: false })));

            const integratedPromise = axiosInstance
                .get("/integrated-career")
                .then((response) => {
                    setIntegratedCareerRecommendation(response.data);
                })
                .catch(() =>
                    setErrors((prev) => ({ ...prev, integratedCareerRecommendation: true }))
                )
                .finally(() =>
                    setLoading((prev) => ({
                        ...prev,
                        integratedCareerRecommendation: false,
                    }))
                );

            await Promise.all([sitePromise, careerPromise, integratedPromise]);
        } catch (error) {
            console.error("비동기 데이터 로드 중 오류 발생:", error);
        }
    };


    const fetchSynchronousData = async (isSearch = false) => {
        try {
            // 사용자 정보 로드
            if (!isSearch) {
                const userResponse = await axiosInstance.get("/members/nickname-email", {
                    headers: { "Allow-Duplicate": true },
                });
                setUserData(userResponse.data);
                setLoading((prev) => ({ ...prev, userData: false }));
            }
    
            // 지역 및 카테고리 데이터 가져오기 (초기 로드만)
            if (!isSearch) {
                const areaPromise = axiosInstance.get("/options/areas", {
                    headers: { "Allow-Duplicate": true },
                });
                const categoryPromise = axiosInstance.get("/options/ncs", {
                    headers: { "Allow-Duplicate": true },
                });
    
                const responses = await Promise.all([areaPromise, categoryPromise]);
                setAreas(responses[0].data);
                setCategories(responses[1].data);
            }
    
            // 훈련 프로그램 데이터 가져오기
            const publicApiResponse = await axiosInstance.get("/training/public", {
                headers: { "Allow-Duplicate": true },
                params: {
                    ...searchParams,
                    pageNum: currentPage,
                    pageSize,
                },
            });
    
            console.log("API Request Sent With Params:", searchParams); // 요청 파라미터
            console.log("API Response Received:", publicApiResponse.data); // 응답 데이터
    
            setPublicApiData(publicApiResponse.data.srchList || []);
            const totalItems = publicApiResponse.data.scn_cnt || 0;
            setTotalPages(Math.ceil(totalItems / pageSize));
            setLoading((prev) => ({ ...prev, publicApi: false }));
        } catch (error) {
            console.error("동기 데이터 로드 중 오류 발생:", error);
        }
    };
    
    
    


    const [subAreas, setSubAreas] = useState([]); // 지역 상세 정보 상태 추가


    const fetchSubcategories = async (srchNcs1) => {
        try {
            const response = await axiosInstance.get("/options/ncs2", {
                headers: { "Allow-Duplicate": true },
                params: { srchNcs1 },
            });
            setSubcategories(response.data);
            setSearchParams((prev) => ({
                ...prev,
                srchNcs2: "", // 중분류 초기화
                srchNcs3: "", // 소분류 초기화
            }));
        } catch (error) {
            console.error("서브 카테고리 로드 중 오류 발생:", error);
        }
    };
    
    

    const fetchSubSubcategories = async (srchNcs2) => {
        try {
            const response = await axiosInstance.get("/options/ncs3", {
                headers: { "Allow-Duplicate": true },
                params: { srchNcs2 },
            });
            setSubSubcategories(response.data);
            setSearchParams((prev) => ({
                ...prev,
                srchNcs3: "", // 소분류 초기화
            }));
        } catch (error) {
            console.error("서브 서브 카테고리 로드 중 오류 발생:", error);
        }
    };
    
    

    const handleFilterChange = (key, value) => {
        setSearchParams((prev) => ({
            ...prev,
            [key]: value,
        }));
    
        // 선택된 값에 따라 관련 데이터를 업데이트하지만 데이터를 가져오지는 않음
        if (key === "srchTraArea1") {
            if (value) {
                // 하위 지역 데이터 요청
                axiosInstance
                    .get("/options/areas/details", { params: { srchTraArea1: value } })
                    .then((response) => {
                        setSubAreas(response.data); // 하위 지역 상태 업데이트
                    })
                    .catch((error) => {
                        console.error("지역 상세 데이터 로드 중 오류 발생:", error);
                    });
            } else {
                setSubAreas([]); // 하위 지역 초기화
            }
        }
    
        if (key === "srchNcs1") fetchSubcategories(value); // 직종 대분류에 따른 중분류 가져오기
        if (key === "srchNcs2") fetchSubSubcategories(value); // 직종 중분류에 따른 소분류 가져오기
    };
    
    
    

    const handleSearch = () => {
        setCurrentPage(1); // 페이지 초기화
        fetchSynchronousData(true); // 검색 버튼 클릭 시 검색 조건 데이터 로드
    };
    
    
    

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        fetchSynchronousData();
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsLoggedIn(false);
            return;
        }
        setIsLoggedIn(true);
        fetchSynchronousData();
    }, [currentPage]);

    useEffect(() => {
        if (isLoggedIn) {
            fetchAsynchronousData();
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return (
            <div className="py-32 min-h-[500px] flex items-center justify-center bg-gray-50 text-center">
                <p className="text-2xl font-semibold text-gray-700">
                    My Page 서비스를 이용하기 위해서는 로그인이 필요합니다.
                </p>
            </div>
        );
    }

    return (
        <div className="py-12 max-w-7xl mx-auto px-4">
            {/* 사용자 정보 */}
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500">My Page</h1>
                <div className="flex items-center">
                    {loading.userData ? (
                    <p className="text-sm sm:text-base text-gray-500">사용자 정보를 로딩 중...</p>
                    ) : (
                    <div className="ml-4 text-left">
                        <p className="font-semibold text-base sm:text-lg">{userData?.nickname || "User 닉네임"}</p>
                        <p className="text-gray-500 text-sm sm:text-base">{userData?.email || "이메일 주소"}</p>
                    </div>
                    )}
                </div>
            </div>


            {/* 추천 세션 1 */}
            <div className="mb-20">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                    챗봇 상담과 소모임 기반 활동 사이트 추천
                </h2>
                {loading.siteRecommendations ? (
                    <div className="flex flex-col justify-center items-center">
                    <Image
                        src="/images/loading.svg"
                        alt="로딩 중"
                        width={80}
                        height={80}
                        className="w-16 sm:w-20"
                    />
                    <p className="text-gray-700 mt-4 text-sm sm:text-lg">
                        AI 분석 중 입니다. 잠시만 기다려 주세요...
                    </p>
                    </div>
                ) : errors.siteRecommendations ? (
                    <p className="text-gray-500 text-sm sm:text-base">
                    추천 데이터를 불러오지 못했습니다.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {siteRecommendations.map((site, index) => (
                        <div
                        key={index}
                        className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md text-center text-base sm:text-lg"
                        >
                        <p className="text-gray-700 font-semibold">{site.name}</p>
                        <a
                            href={site.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline mt-2 block text-sm sm:text-lg"
                        >
                            방문하기
                        </a>
                        </div>
                    ))}
                    </div>
                )}
            </div>


            {/* 추천 세션 2: 설문 기반 직업 추천 */}
            {/* <div className="mb-20">
                <h2 className="text-2xl font-bold mb-8">설문지 이용 맞춤 직업 추천</h2>
                {loading.careerRecommendation ? (
                    <div className="flex flex-col justify-center items-center">
                        <Image
                        src="/images/loading.svg"
                        alt="로딩 중"
                        width={100}
                        height={100}
                        />
                        <p className="text-gray-700 mt-4 text-lg">AI 분석 중 입니다. 잠시만 기다려 주세요...</p>
                </div>
                ) : errors.careerRecommendation ? (
                    <p className="text-gray-500">추천 데이터를 불러오지 못했습니다.</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                                <p className="text-xl text-green-600 mb-4">
                                적성률 {careerRecommendation[`job${i}Percent`]}%
                                </p>
                                <p className="text-gray-700 font-bold text-2xl mb-4">
                                    {careerRecommendation[`job${i}`]}
                                </p>
                                <p className="ext-base text-gray-500">
                                    {careerRecommendation[`job${i}Explanation`]}
                                </p>
                                
                            </div>
                        ))}
                    </div>
                )}
            </div> */}
            <div className="mb-20">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                    설문지 이용 맞춤 직업 추천
                </h2>
                {loading.careerRecommendation ? (
                    <div className="flex flex-col justify-center items-center">
                    <Image
                        src="/images/loading.svg"
                        alt="로딩 중"
                        width={80}
                        height={80}
                        className="w-16 sm:w-20"
                    />
                    <p className="text-gray-700 mt-4 text-sm sm:text-lg">
                        AI 분석 중 입니다. 잠시만 기다려 주세요...
                    </p>
                    </div>
                ) : errors.careerRecommendation ? (
                    <p className="text-gray-500 text-sm sm:text-base">
                    추천 데이터를 불러오지 못했습니다.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[1, 2, 3].map((i) => (
                        <div
                        key={i}
                        className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md text-center"
                        >
                        <p className="text-lg sm:text-xl text-green-600 mb-2 sm:mb-4">
                            적성률 {careerRecommendation[`job${i}Percent`]}%
                        </p>
                        <p className="text-gray-700 font-bold text-xl sm:text-2xl mb-2 sm:mb-4">
                            {careerRecommendation[`job${i}`]}
                        </p>
                        <p className="text-sm sm:text-base text-gray-500">
                            {careerRecommendation[`job${i}Explanation`]}
                        </p>
                        </div>
                    ))}
                    </div>
                )}
                </div>

            {/* 추천 세션 3: 통합 직업 추천 */}
            {/* <div className="mb-20">
                <h2 className="text-2xl font-bold mb-8">니토피아 활동 직업 추천</h2>
                {loading.integratedCareerRecommendation ? (
                    <div className="flex flex-col justify-center items-center">
                        <Image
                        src="/images/loading.svg"
                        alt="로딩 중"
                        width={100}
                        height={100}
                        />
                        <p className="text-gray-700 mt-4 text-lg">AI 분석 중 입니다. 잠시만 기다려 주세요...</p>
                    </div>
                ) : errors.integratedCareerRecommendation ? (
                    <p className="text-gray-500">추천 데이터를 불러오지 못했습니다.</p>
                ) : (
                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                                <p className="text-xl text-green-600 mb-4">
                                    적성률 {integratedCareerRecommendation[`job${i}Percent`]}%
                                </p>
                                <p className="text-gray-700 font-bold text-2xl mb-4">
                                    {integratedCareerRecommendation[`job${i}`]}
                                </p>
                                <p className="ext-base text-gray-500">
                                    {integratedCareerRecommendation[`job${i}Explanation`]}
                                </p>
                                
                            </div>
                        ))}
                    </div>
                )}
            </div> */}
            <div className="mb-20">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                    니토피아 활동 직업 추천
                </h2>
                {loading.integratedCareerRecommendation ? (
                    <div className="flex flex-col justify-center items-center">
                    <Image
                        src="/images/loading.svg"
                        alt="로딩 중"
                        width={80}
                        height={80}
                        className="w-16 sm:w-20"
                    />
                    <p className="text-gray-700 mt-4 text-sm sm:text-lg">
                        AI 분석 중 입니다. 잠시만 기다려 주세요...
                    </p>
                    </div>
                ) : errors.integratedCareerRecommendation ? (
                    <p className="text-gray-500 text-sm sm:text-base">
                    추천 데이터를 불러오지 못했습니다.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[1, 2, 3].map((i) => (
                        <div
                        key={i}
                        className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-md text-center"
                        >
                        <p className="text-lg sm:text-xl text-green-600 mb-2 sm:mb-4">
                            적성률 {integratedCareerRecommendation[`job${i}Percent`]}%
                        </p>
                        <p className="text-gray-700 font-bold text-xl sm:text-2xl mb-2 sm:mb-4">
                            {integratedCareerRecommendation[`job${i}`]}
                        </p>
                        <p className="text-sm sm:text-base text-gray-500">
                            {integratedCareerRecommendation[`job${i}Explanation`]}
                        </p>
                        </div>
                    ))}
                    </div>
                )}
                </div>

            {/* 공공기관 검색 */}
            <div className="mb-20">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                    공공기관 훈련과정 추천
                </h2>
                <div className="mb-12 space-y-4">
                    {/* 첫 번째 줄: 훈련 지역, 훈련 지역 상세 */}
                    <div className="flex flex-wrap gap-4">
                    <div className="flex-1 max-w-[200px] sm:max-w-[250px]">
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                        훈련 지역
                        </label>
                        <select
                        className="border px-3 py-2 rounded-lg w-full"
                        value={searchParams.srchTraArea1}
                        onChange={(e) =>
                            handleFilterChange("srchTraArea1", e.target.value)
                        }
                        >
                        <option value="">전체</option>
                        {areas.map((area) => (
                            <option key={area.code} value={area.code}>
                            {area.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="flex-1 max-w-[200px] sm:max-w-[250px]">
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                        훈련 지역 상세
                        </label>
                        <select
                        className="border px-3 py-2 rounded-lg w-full"
                        value={searchParams.srchTraArea2}
                        onChange={(e) =>
                            handleFilterChange("srchTraArea2", e.target.value)
                        }
                        disabled={!subAreas.length}
                        >
                        <option value="">전체</option>
                        {subAreas.map((area) => (
                            <option key={area.code} value={area.code}>
                            {area.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    </div>

                    {/* 두 번째 줄: 직종 대분류, 직종 중분류 */}
                    <div className="flex flex-wrap gap-4">
                    <div className="flex-1 max-w-[200px] sm:max-w-[250px]">
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                        직종 대분류
                        </label>
                        <select
                        className="border px-3 py-2 rounded-lg w-full"
                        value={searchParams.srchNcs1}
                        onChange={(e) => handleFilterChange("srchNcs1", e.target.value)}
                        >
                        <option value="">전체</option>
                        {categories.map((category) => (
                            <option key={category.code} value={category.code}>
                            {category.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="flex-1 max-w-[300px] sm:max-w-[400px]">
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                        직종 중분류
                        </label>
                        <select
                        className="border px-3 py-2 rounded-lg w-full"
                        value={searchParams.srchNcs2}
                        onChange={(e) => handleFilterChange("srchNcs2", e.target.value)}
                        >
                        <option value="">전체</option>
                        {subcategories.map((subcategory) => (
                            <option key={subcategory.code} value={subcategory.code}>
                            {subcategory.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    </div>

                    {/* 세 번째 줄: 직종 소분류, 키워드, 검색 버튼 */}
                    <div className="flex flex-wrap gap-4 items-end">
                    <div className="flex-1 max-w-[300px] sm:max-w-[400px]">
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                        직종 소분류
                        </label>
                        <select
                        className="border px-3 py-2 rounded-lg w-full"
                        value={searchParams.srchNcs3}
                        onChange={(e) => handleFilterChange("srchNcs3", e.target.value)}
                        >
                        <option value="">전체</option>
                        {subSubcategories.map((subSubcategory) => (
                            <option
                            key={subSubcategory.code}
                            value={subSubcategory.code}
                            >
                            {subSubcategory.name}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="flex-1 max-w-[200px] sm:max-w-[250px]">
                        <label className="block text-sm sm:text-base font-medium text-gray-700">
                        키워드
                        </label>
                        <input
                        type="text"
                        className="border px-3 py-2 rounded-lg w-full"
                        placeholder="훈련과정명 입력"
                        value={searchParams.keyword}
                        onChange={(e) => handleFilterChange("keyword", e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                        className="px-6 sm:px-8 py-2 bg-yellow-400 text-white rounded-lg"
                        onClick={handleSearch}
                        >
                        검색
                        </button>
                    </div>
                    </div>
                </div>

                {/* 공공기관 결과 출력 */}
                {loading.publicApi ? (
                    <div className="flex flex-col justify-center items-center">
                    <Image
                        src="/images/loading.svg"
                        alt="로딩 중"
                        width={80}
                        height={80}
                        className="w-16 sm:w-20"
                    />
                    <p className="text-gray-700 mt-4 text-sm sm:text-lg">
                        공공데이터를 불러오는 중 입니다. 잠시만 기다려 주세요...
                    </p>
                    </div>
                ) : publicApiData.length > 0 ? (
                    <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {publicApiData.map((item, index) => (
                        <a
                            key={index}
                            href={item.titleLink || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-50 rounded-lg shadow-md text-center block text-sm sm:text-base p-4 sm:p-6"
                        >
                            <p className="text-gray-700 font-semibold text-base sm:text-lg mb-2 sm:mb-4">
                            {item.title || "훈련과정명"}
                            </p>
                            <p className="text-sm sm:text-base text-gray-500 mb-2">
                            {item.traStartDate || "훈련 시작일"} ~ {item.traEndDate || "훈련 종료일"}
                            </p>
                            <p className="text-sm sm:text-base text-green-600 mb-2">
                            {item.address || "주소"}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500">
                            {item.subTitle || "훈련기관명"}
                            </p>
                        </a>
                        ))}
                    </div>

                    <div className="flex justify-center mt-8 sm:mt-12">
                        <button
                        className="px-4 py-2 bg-yellow-100 rounded-md hover:bg-yellow-400"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        >
                        이전
                        </button>
                        <span className="mx-4 text-sm sm:text-base">
                        {currentPage} / {totalPages}
                        </span>
                        <button
                        className="px-4 py-2 bg-yellow-100 rounded-md hover:bg-yellow-400"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        >
                        다음
                        </button>
                    </div>
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm sm:text-base">
                    훈련과정 데이터를 찾을 수 없습니다.
                    </p>
                )}
                </div>

        </div>
    );
}


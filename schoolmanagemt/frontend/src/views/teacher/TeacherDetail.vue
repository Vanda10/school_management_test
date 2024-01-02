<template>
    <div class="main-content ml-[300px] p-8">
        <!-- first row -->
        <div class="flex justify-between ml-20 mr-20">
            <p class="mt-2 ml-7">Teachers</p>
            <button type="button" 
                class="text-white bg-sky-600 hover:bg-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                <i class="bi bi-pencil-square"></i>
                Edit Teacher
            </button>
        </div>
        <!-- second row -->
        <div class="flex justify-center mt-3 ml-20 mr-20">
            <div class="dropdown dropdown-bottom">
                <div tabindex="0" role="button" class="btn text-white bg-sky-600 hover:bg-sky-700 px-4 py-2.5">
                <i class="bi bi-caret-down-fill"></i>  Filtered
                </div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>ID</a></li>
                <li><a>Name</a></li>
                </ul>
            </div>

            <div class="ml-5 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-200 text-black flex-grow">
            <i class="bi bi-search text-sm"></i>
            <input
                type="text"
                placeholder="Search"
                class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"/>
            </div>
        </div>
    
        <div class="flex mt-10 ml-20 mr-20">
            <!-- teacher profile -->
            <div class="flex -space-x-1 overflow-hidden">
                <img class="inline-block h-30 w-30 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </div>

            <!-- teacher description -->
            <div class="flex mt-10 ml-20">
                <div class="flex-col text-gray-400 font-bold">
                    <p class="mb-3 text-[#183D5C]">About</p> 
                    <p class="mb-3">Name: Kristen Woo</p> 
                    <p class="mb-3">Gender: Female</p>
                    <p class="mb-3">Email: kristenwoo@gmail.com</p>
                    <p class="mb-3">Phone Number: 089765432</p>
                </div>
            </div>
            
        </div>

        <!-- display value of the courses class -->
        <div class="flex-col mt-20 mr-20 ml-20 text-[#183D5C] font-bold">
            <div class="flex mt-4">
                <i class="bi bi-easel2-fill"></i>
                <p class="ml-3">Courses: </p>
            </div>

            <div class="flex mt-4">
                <i class="bi bi-door-open"></i>
                <p class="ml-3">Classes: </p>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<template>
  <div class="main-content ml-[300px] p-8">
    <!-- first row -->
    <div class="flex justify-between">
      <p class="mt-2 ml-7">Teachers</p>
      <button
        type="button"
        class="btn text-white bg-sky-600 hover:bg-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        <i class="bi bi-pencil-square"></i> Add Teacher
      </button>
    </div>
    <!-- second row -->
    <div class="flex justify-center mt-3">
      <div class="dropdown dropdown-bottom">
        <div
          tabindex="0"
          role="button"
          class="btn text-white bg-sky-600 hover:bg-sky-700 px-4 py-2.5"
        >
          <i class="bi bi-caret-down-fill"></i> Filtered
        </div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>ID</a></li>
          <li><a>Name</a></li>
        </ul>
      </div>

      <div class="ml-5 p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-200 text-black flex-grow">
        <i class="bi bi-search text-sm"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search"
          class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          @input="filterTable"
        />
      </div>
    </div>

    <!-- third row table -->
    <table class="table table-striped mt-10">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(teacher, index) in filteredTeachers" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ teacher.firstname || 'N/A' }}</td>
          <td>{{ teacher.lastname || 'N/A' }}</td>
          <td>{{ teacher.email || 'N/A' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const teachers = ref([]);
const filteredTeachers = ref([]);
const searchQuery = ref('');

const filterTable = () => {
  if (searchQuery.value === '') {
    // Show all data when the search query is empty
    filteredTeachers.value = teachers.value;
  } else {
    // Show only matching record when there is a search query
    filteredTeachers.value = teachers.value.filter(teacher =>
      (teacher.firstname && teacher.firstname.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      (teacher.lastname && teacher.lastname.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
      (teacher.email && teacher.email.toLowerCase().includes(searchQuery.value.toLowerCase()))
    );
  }
};

onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/teachers');
    teachers.value = response.data;
    filterTable(); // Filter initially
  } catch (error) {
    console.error('Error fetching teachers:', error);
  }
});
</script>

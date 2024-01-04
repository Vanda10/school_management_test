<template>
  <div class="main-content ml-[300px] p-8">
    <!-- First row -->
    <div class="flex justify-between">
      <p class="mt-2 ml-7">Students</p>
      <button
        type="button"
        class="text-white bg-sky-600 hover:bg-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        @click="addStudent"
      >
        <i class="bi bi-pencil-square"></i> Add Students
      </button>
    </div>

    <!-- Second row -->
    <div class="flex justify-center mt-3">
      <div class="dropdown dropdown-bottom">
        <div tabindex="0" role="button" class="btn text-white bg-sky-600 hover:bg-sky-700 px-4 py-2.5">
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
          type="text"
          placeholder="Search"
          class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          v-model="searchQuery"
        />
      </div>
    </div>

    <!-- Display Students -->
    <div v-if="students.length > 0">
      <div v-for="student in students" :key="student.id" class="student-row">
        <p>{{ student.name }}</p>
        <!-- Add edit and delete buttons with click handlers -->
        <button @click="editStudent(student.id)">Edit</button>
        <button @click="deleteStudent(student.id)">Delete</button>
      </div>
    </div>

    <!-- No Students Found Message -->
    <div v-else>
      <p>No students found.</p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const API_URL = 'http://localhost:8000/api/students';

const students = ref([]);
const searchQuery = ref('');

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    students.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const addStudent = () => {
  // Implement logic for adding a new student
  // You can navigate to a new route or show a modal for adding a student
};

const editStudent = (studentId) => {
  // Implement logic for editing a student
  // You can navigate to a new route or show a modal for editing a student
};

const deleteStudent = (studentId) => {
  // Implement logic for deleting a student
  // You can show a confirmation dialog and make an API call to delete the student
};

onMounted(() => {
  fetchData();
});

</script>

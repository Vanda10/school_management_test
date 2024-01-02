<template>
    <div class="main-content ml-[300px] p-8">
      <div class="text-4xl font-bold mt-20 ml-20">
        <h1>Add Teacher</h1>
      </div>

      <div class="mt-5 flex ml-20 mr-20">
        <div class="mb-3 grow h-14">
          <div class="form-text text-gray-900" id="first_name">First Name</div>
          <div class="input-group">
            <input type="text" class="form-control" id="first_name" aria-describedby="basic-addon4">
          </div>
        </div> 
      
        <div class="mb-3 grow h-25 ml-3">
          <div class="form-text text-gray-900" id="last_name">Last Name</div>
          <div class="input-group">
            <input type="text" class="form-control" id="last_name" aria-describedby="basic-addon4">
          </div>
        </div> 
      </div>
    
          
      <div class="flex ml-20 mr-20">
        <div class="mb-3 grow h-14">
          <div class="form-text text-gray-900" id="email">Email Address</div>
          <div class="input-group">
            <input type="text" class="form-control" id="email" aria-describedby="basic-addon4">
          </div>
        </div> 
      
        <div class="ml-5 grow-0">
          <div class="input-group">
            <div class="form-text text-gray-900" id="gender">Gender</div>
            <div class="input-group">
              <select class="form-select" id="gender" aria-label="Example select with button addon">
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="flex ml-20 mr-20">
        <div class="mb-3 grow h-14">
          <div class="form-text text-gray-900" id="password">Password</div>
          <div class="input-group">
            <input type="text" class="form-control" id="password" aria-describedby="basic-addon4">
          </div>
        </div> 
      
        <div class="mb-3 grow h-25 ml-3">
          <div class="form-text text-gray-900" id="phone_number">Phone Number</div>
          <div class="input-group">
            <input type="text" class="form-control" id="phone_number" aria-describedby="basic-addon4">
          </div>
        </div> 
      </div>

      <div class="flex ml-[80px] mr-0">
        <!-- Button trigger modal -->
        <div class="mt-10">
          <button type="button" class="btn text-white bg-[#183D5C] hover:bg-sky-700 px-5 py-2.5 me-2 mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="bi bi-pencil-square"></i> Add teacher
          </button>
        </div>
        
      </div>
      
    </div>
</template>

<script setup>

</script>
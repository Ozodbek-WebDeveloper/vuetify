  <template>
  <v-sheet width="300" class="mx-auto mt-5">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        label="First name"
        :rules="firstNameRules"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        label="Last name"
        :rules="lastNameRules"
      ></v-text-field>

      <v-btn type="submit" block @click="$router.push('/')" class="mt-2">Submit</v-btn>
    </v-form>
    <v-btn variant="tonal" @click="$router.push('/')" class="mt-7">Home</v-btn>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    firstNameRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "First name must be at least 3 characters.";
      },
    ],
    lastName: "123",
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
    ],
  }),
};
</script>
<style>
</style>
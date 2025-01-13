<template>
    <main class="profile-settings-page">
        <div class="profile-settings-layout">
            <Sidebar />
            <div class="profile-settings-container">
                <form class="profile-settings-form" @submit.prevent="handleSubmit">
                    <h1 class="profile-settings-title">Change Password</h1>
                    <div class="profile-settings-content">
                        <div>
                            <div class="input-container">
                                <input :type="showCurrentPassword ? 'text' : 'password'" id="currentpassword"
                                    class="form-input" placeholder="Current Password" v-model="currentPassword" />
                                <span class="input-icon" @click="togglePasswordVisibility('current')">
                                    <EyeClosed v-if="!showCurrentPassword" />
                                    <Eye v-else />
                                </span>
                            </div>
                        </div>
                        <div>
                            <div class="input-container">
                                <input :type="showNewPassword ? 'text' : 'password'" id="newpassword" class="form-input"
                                    placeholder="New Password" v-model="newPassword" />
                                <span class="input-icon" @click="togglePasswordVisibility('new')">
                                    <EyeClosed v-if="!showNewPassword" />
                                    <Eye v-else />
                                </span>
                            </div>
                        </div>



                    </div>
                    <button type="submit" class="save-button btn-primary">Save changes</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { useUsersStore } from '@/stores/user'
import { EyeClosed } from 'lucide-vue-next';
import { Eye } from 'lucide-vue-next';
export default {
    name: 'ChangePassword',
    data() {
        return {
            currentPassword: useUsersStore().authenticatedUser.password,
            newPassword: '',
            showCurrentPassword: false,
            showNewPassword: false,
        };
    },
    components: {
        Sidebar,
        EyeClosed,
        Eye
    },
    methods: {
        togglePasswordVisibility(input) {
            if (input === 'current') {
                this.showCurrentPassword = !this.showCurrentPassword;
            } else if (input === 'new') {
                this.showNewPassword = !this.showNewPassword;
            }
        },
        handleSubmit() {
            const updatedUserData = {
                newPassword: this.newPassword,
            };

            const store = useUsersStore();
            try {
                store.updateUser(updatedUserData);
                this.$router.go();
                alert('Palavra passe alterada com sucesso!');
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>

.input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}

.input-icon {
    position: absolute;
    right: 12px;
    color: var(--Gray-400, #6b737a);
    cursor: pointer;
}


.profile-settings-page {
    background: var(--Main-Black, #010306);
    display: flex;
    padding: 0 0 69px;
    flex-direction: column;
    overflow: hidden;
}

.profile-settings-container {
    display: flex;
    align-items: flex-start;
    gap: 40px 96px;
    margin: 64px 0 0 48px;
}

.profile-settings-form {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    width: 301px;
    gap: 64px;
}

.profile-settings-title {
    color: var(--Gray-100, #bec7ce);
    font-size: 36px;
    font-family: Aspekta200;
}

.profile-settings-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 32px;
}

.avatar-container {
    display: flex;
    width: 150px;
    max-width: 100%;
    flex-direction: column;
}

.profile-settings-layout {
    display: flex;
    align-items: flex-start;
    padding: 20px;
}

.avatar-image {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: 50%;
}

.avatar-button {
    background-color: transparent;
    border-color: transparent;
}

.save-button {
    align-self: flex-start;
}

@media (max-width: 991px) {
    .profile-settings-container {
        max-width: 100%;
        margin-top: 40px;
    }

    .profile-settings-content {
        margin-top: 40px;
    }

    .form-input {
        white-space: normal;
    }

    .save-button {
        margin-top: 40px;
        padding: 12px 20px;
    }
}
</style>
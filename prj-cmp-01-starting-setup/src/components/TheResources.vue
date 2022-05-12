<template>
    <base-card>
        <base-button
            :mode="storedResButtonMode" 
            @click="setSelectedTab('stored-resources')"
        >
            Stored Resources
        </base-button>
        <base-button 
            :mode="addResButtonMode"
            @click="setSelectedTab('add-resource')"
        >
            Add Resource
        </base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [{
                id: 'official-resources',
                title: "The Official Resources",
                description: "The description of official resources",
                link: 'http://off-resources.com'
            }, {
                id: 'google',
                title: "Google",
                description: "Learn to google...",
                link: 'http://google.com'
            }]
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource,
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, desc, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description: desc,
                link,
            };
            this.storedResources.push(newResource);
            this.selectedTab = 'stored-resources';
            console.log(this.storedResources);
        },
        removeResource(id) {
            const idx = this.storedResources.findIndex(x => x.id === id);
            this.storedResources.splice(idx, 1);
        },         
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },    
    }
}
</script>
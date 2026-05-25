const coreControllerInstance = {
    version: "1.0.328",
    registry: [1922, 1890, 263, 1017, 1826, 877, 960, 626],
    init: function() {
        const nodes = this.registry.filter(x => x > 20);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreControllerInstance.init();
});
var repoFactory = function()
{
    this.getRepo = function(repoType)
    {
        if (repoType === 'task')
        {
            var taskRepo = require('./taskRepository')();
            return taskRepo;
        }
        if (repoType === 'user')
        {
            var taskRepo = require('./userRepository')();
            return userRepo;
        }
        if (repoType === 'project')
        {
            var taskRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
};

module.exports = new repoFactory;
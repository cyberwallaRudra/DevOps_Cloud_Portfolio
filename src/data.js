export const projects = [
  {
    id: "django-notes",
    title: "Django Notes App",
    category: "Web + Containers",
    status: "Hands-on",
    year: "2026",
    summary: "A containerized notes application used to practice application architecture, database connectivity and production-style deployment.",
    problem: "I wanted to move beyond isolated coding exercises and understand how an application, database and reverse proxy work together as one deployable system.",
    tools: ["Django", "Python", "MySQL", "Docker", "Docker Compose", "Nginx"],
    contribution: [
      "Containerized the application and database",
      "Designed service-to-service networking",
      "Configured persistent MySQL storage",
      "Added health checks and dependency handling",
      "Used Nginx as a reverse proxy"
    ],
    learned: "Hands-on project work, documentation, troubleshooting and iterative debugging.",
    guidance: "Use this field for the person, course, mentor or documentation that guided the project. Replace this placeholder with the exact source.",
    challenges: "Container startup order, database persistence, Compose networking and Docker Desktop socket configuration.",
    outcome: "A repeatable multi-service environment that made Docker networking, volumes and Compose much clearer.",
    next: "Add CI validation, image scanning, secrets management and cloud deployment.",
    architecture: ["Browser", "Nginx", "Django", "MySQL"]
  },
  {
    id: "two-tier-flask",
    title: "Two-Tier Flask App",
    category: "Docker + Networking",
    status: "Hands-on",
    year: "2026",
    summary: "A two-tier application built to understand container networking, service discovery and separation of application and data layers.",
    problem: "I wanted a small system where the networking concepts could be observed directly instead of being hidden by a large framework.",
    tools: ["Flask", "Python", "Docker", "Docker Network", "MySQL"],
    contribution: [
      "Created separate application and database containers",
      "Built a custom Docker bridge network",
      "Tested service discovery between containers",
      "Debugged ports, DNS and container connectivity"
    ],
    learned: "Docker networking documentation, CLI experimentation and troubleshooting.",
    guidance: "Replace with your actual course, mentor or documentation source.",
    challenges: "Understanding host ports versus container ports and why containers should communicate using service names.",
    outcome: "A compact lab that demonstrates core two-tier deployment concepts.",
    next: "Add a reverse proxy, health checks and CI/CD pipeline."
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker WebApp",
    category: "Java + Database",
    status: "Hands-on",
    year: "2026",
    summary: "A Java/Spring Boot application backed by MySQL, used to practice application packaging and database-backed services.",
    problem: "I wanted a realistic CRUD application that could later become a deployment target for Docker and cloud infrastructure.",
    tools: ["Java", "Spring Boot", "MySQL", "Docker", "Docker Compose"],
    contribution: [
      "Worked with the Spring Boot application structure",
      "Connected the application to MySQL",
      "Created Docker packaging",
      "Investigated image and base-JDK compatibility issues"
    ],
    learned: "Project documentation, debugging build logs and containerizing a Java application.",
    guidance: "Add the exact course/tutorial/mentor information here.",
    challenges: "Base image availability, dependency compatibility and database configuration.",
    outcome: "A practical application that connects development concepts with deployment concerns.",
    next: "Add automated tests, CI, vulnerability scanning and cloud deployment."
  },
  {
    id: "cinematic-portfolio",
    title: "Cinematic React Portfolio",
    category: "Frontend Engineering",
    status: "Hands-on",
    year: "2026",
    summary: "A motion-focused React/Vite portfolio experiment built to combine frontend engineering with a recruiter-oriented presentation.",
    problem: "A conventional resume page did not communicate how I think about systems, automation and infrastructure, so I explored an interactive engineering-style presentation.",
    tools: ["React", "Vite", "JavaScript", "Framer Motion", "CSS"],
    contribution: [
      "Designed the information architecture",
      "Built animated sections and interactions",
      "Worked through Vite/Node runtime issues",
      "Focused on responsive presentation and recruiter usability"
    ],
    learned: "React documentation, Vite documentation and hands-on debugging.",
    guidance: "Replace with exact learning sources.",
    challenges: "Performance, animation smoothness and dependency/runtime compatibility.",
    outcome: "A portfolio foundation that can evolve as more DevOps projects are completed.",
    next: "Connect live project data, deployment telemetry and a real-time GitHub activity panel."
  },
  {
    id: "kubernetes-lab",
    title: "Kubernetes Lab",
    category: "Cloud Native",
    status: "Learning",
    year: "2026",
    summary: "A learning environment for Kubernetes fundamentals, workloads, services and cluster operations.",
    problem: "Docker made containers understandable, but I needed to understand what changes when many containers must be scheduled, exposed and maintained as a system.",
    tools: ["Kubernetes", "kubectl", "Containers", "Linux"],
    contribution: [
      "Practiced Pods, Deployments and Services",
      "Read cluster state through kubectl",
      "Investigated networking and workload concepts",
      "Built small repeatable labs"
    ],
    learned: "Kubernetes documentation, labs and command-line experimentation.",
    guidance: "Add exact learning platform, mentor or course here.",
    challenges: "Understanding the control plane, desired state and service discovery.",
    outcome: "A stronger mental model of Kubernetes objects and cluster operations.",
    next: "Add Helm, Ingress, monitoring, RBAC and a cloud-managed cluster."
  },
  {
    id: "security-labs",
    title: "Cybersecurity Learning Labs",
    category: "Security",
    status: "Learning",
    year: "2026",
    summary: "A controlled lab journey covering Linux, networking, reconnaissance and defensive security concepts.",
    problem: "Cloud and DevOps work requires understanding the security implications of systems, networks and deployment pipelines.",
    tools: ["Linux", "Nmap", "Wireshark", "Metasploit", "Security Labs"],
    contribution: [
      "Built isolated practice environments",
      "Studied network enumeration concepts",
      "Practiced Linux administration and troubleshooting",
      "Connected security concepts with infrastructure operations"
    ],
    learned: "Security labs, documentation and practical experimentation in controlled environments.",
    guidance: "Add exact labs/courses and mentors here.",
    challenges: "Building a safe lab, understanding networking deeply and separating experimentation from production systems.",
    outcome: "A security-aware foundation that complements cloud and DevOps learning.",
    next: "Focus on IAM, cloud security, container security, logging and detection engineering."
  }
];

export const skills = [
  { name: "Cloud Infrastructure", level: "Learning", proof: "AWS/Azure concepts, deployment architecture and cloud-native study" },
  { name: "Docker", level: "Hands-on", proof: "Multi-container applications, networks, volumes and Compose" },
  { name: "Kubernetes", level: "Learning", proof: "Pods, Deployments, Services and kubectl labs" },
  { name: "CI/CD", level: "Learning", proof: "Pipeline concepts and deployment automation study" },
  { name: "Linux", level: "Hands-on", proof: "Parrot/Linux administration, package and system troubleshooting" },
  { name: "Networking", level: "Hands-on", proof: "Ports, bridge networks, DNS, HTTP and service connectivity" },
  { name: "Infrastructure as Code", level: "Exploring", proof: "Terraform concepts and infrastructure workflows" },
  { name: "Security", level: "Learning", proof: "Security labs, enumeration and infrastructure security concepts" },
  { name: "Nginx", level: "Hands-on", proof: "Reverse proxy in containerized application architecture" },
  { name: "Git / GitHub", level: "Hands-on", proof: "Version control and project workflow" },
  { name: "Python", level: "Hands-on", proof: "Django, Flask and automation-oriented practice" },
  { name: "Java / Spring Boot", level: "Hands-on", proof: "Database-backed application and containerization" }
];

export const journey = [
  ["01", "Linux", "Built the operating-system foundation needed for infrastructure work and troubleshooting."],
  ["02", "Networking", "Moved deeper into ports, protocols, DNS, routing and service communication."],
  ["03", "Docker", "Learned to package applications and reason about repeatable environments."],
  ["04", "Kubernetes", "Started exploring orchestration, services and desired-state infrastructure."],
  ["05", "Cloud", "Connecting containers, networking and automation with cloud infrastructure."],
  ["06", "CI/CD", "Learning to turn source code into repeatable build and delivery pipelines."],
  ["07", "Security", "Adding security thinking to systems, containers and cloud workflows."],
  ["08", "CEH v13 + AI", "Future security track focused on ethical hacking concepts and AI-assisted security learning."]
];


export const commandLibrary = {
  Docker: {
    eyebrow: "CONTAINER ENGINE",
    description: "The commands you repeatedly use to build images, run containers, inspect state, manage networks and clean resources.",
    groups: [
      {
        title: "Images",
        commands: [
          { code: "docker build -t myapp:1.0 .", what: "Builds a Docker image from the Dockerfile in the current directory and tags it as myapp:1.0.", why: "Use this when turning application source code into a reusable container image.", how: "Docker reads the Dockerfile, sends the build context to the builder, executes each instruction as an image layer, then stores the resulting image under the tag.", example: "docker build -t notes-app:1.0 ." },
          { code: "docker images", what: "Lists images stored locally, including repository, tag, image ID and size.", why: "Useful for checking whether an image was created and identifying old images.", how: "The Docker client asks the local daemon for its image metadata and prints repository, tag, ID, creation time and size.", example: "docker images" },
          { code: "docker pull nginx:latest", what: "Downloads an image from a container registry to the local machine.", why: "Use it before running an image that is not available locally.", how: "Docker contacts the configured registry, resolves the requested tag to an image manifest, downloads the required layers and stores them locally.", example: "docker pull nginx:latest" },
          { code: "docker tag myapp:1.0 user/myapp:1.0", what: "Adds a registry-friendly tag to an existing local image.", why: "Commonly used before pushing an image to Docker Hub or another registry.", how: "Docker creates another local reference to the same image ID; it does not rebuild or copy the image.", example: "docker tag notes-app:1.0 username/notes-app:1.0" },
          { code: "docker push user/myapp:1.0", what: "Uploads a tagged image to a container registry.", why: "Makes the image available to CI/CD systems, servers or a Kubernetes cluster.", how: "Docker authenticates with the registry, checks which layers already exist remotely and uploads only missing layers under the selected tag.", example: "docker push username/notes-app:1.0" }
        ]
      },
      {
        title: "Containers",
        commands: [
          { code: "docker run -d --name web -p 8080:80 nginx", what: "Creates and starts an Nginx container in detached mode and maps host port 8080 to container port 80.", why: "One of the most important commands for understanding how containers become reachable services.", how: "Docker creates a container from the image, configures its filesystem and network namespace, maps the requested host port, and starts the container process.", example: "Open http://localhost:8080 after the container starts." },
          { code: "docker ps", what: "Shows currently running containers.", why: "Your first check when asking: 'What is running right now?'", how: "Docker queries the daemon for container state and formats the matching metadata as a table.", example: "docker ps" },
          { code: "docker ps -a", what: "Shows running and stopped containers.", why: "Essential for finding a container that exited unexpectedly.", how: "Docker queries the daemon for container state and formats the matching metadata as a table.", example: "docker ps -a" },
          { code: "docker logs -f web", what: "Streams the logs produced by the web container.", why: "Use it to troubleshoot application startup, HTTP errors and crashes.", how: "Docker reads the selected container log stream; -f keeps the client attached so new log lines appear as they are written.", example: "docker logs -f web" },
          { code: "docker exec -it web sh", what: "Opens an interactive shell inside the running container.", why: "Useful for inspecting files, environment variables, processes and connectivity.", how: "The command is parsed by the relevant CLI, which translates the requested operation into API or system calls and returns the resulting state to the terminal.", example: "docker exec -it web sh" },
          { code: "docker stop web", what: "Gracefully stops a running container.", why: "Use it before removing or replacing a running workload.", how: "Docker sends a graceful termination signal to the container process and waits before forcing termination if needed.", example: "docker stop web" },
          { code: "docker rm web", what: "Removes a stopped container.", why: "Keeps the local Docker environment clean.", how: "Docker removes the stopped container metadata and writable layer while leaving referenced images and named volumes alone.", example: "docker rm web" }
        ]
      },
      {
        title: "Networking",
        commands: [
          { code: "docker network ls", what: "Lists Docker networks.", why: "Helps identify which network a service should use.", how: "The command is parsed by the relevant CLI, which translates the requested operation into API or system calls and returns the resulting state to the terminal.", example: "docker network ls" },
          { code: "docker network create app-net", what: "Creates a user-defined bridge network.", why: "Lets related containers communicate through Docker's internal networking.", how: "Docker creates a user-defined bridge network and its embedded DNS so containers on that network can resolve each other by name.", example: "docker network create app-net" },
          { code: "docker run -d --network app-net --name db mysql:8", what: "Starts MySQL attached to the custom app-net network.", why: "The application container can reach it using the container/service name.", how: "Docker creates a container from the image, configures its filesystem and network namespace, maps the requested host port, and starts the container process.", example: "DB_HOST=db" },
          { code: "docker inspect web", what: "Returns detailed JSON metadata about a container.", why: "Use it when you need exact IPs, mounts, networks, environment or runtime configuration.", how: "Docker returns the daemon’s structured JSON state for the selected resource, including configuration, mounts, networks and runtime metadata.", example: "docker inspect web" }
        ]
      },
      {
        title: "Storage & Cleanup",
        commands: [
          { code: "docker volume create db-data", what: "Creates a named Docker volume.", why: "Use persistent storage when container lifecycle should not delete database data.", how: "Docker registers a named volume and prepares the storage location managed by the Docker engine.", example: "docker volume create db-data" },
          { code: "docker system df", what: "Shows how much disk space Docker images, containers, volumes and build cache consume.", why: "Especially useful when Docker starts consuming large amounts of disk space.", how: "Docker calculates disk usage across images, containers, local volumes and build cache so you can identify where space is being consumed.", example: "docker system df" },
          { code: "docker system prune", what: "Removes unused Docker resources after confirmation.", why: "Useful for controlled cleanup in development environments. Review what will be removed first.", how: "Docker identifies unused resources and removes the categories selected by the command after confirmation.", example: "docker system prune" }
        ]
      },
      {
        title: "Compose",
        commands: [
          { code: "docker compose up -d", what: "Creates and starts all services defined in compose.yaml/docker-compose.yml in the background.", why: "The standard way to launch a multi-container development stack.", how: "Compose reads the service definitions, creates the required network/containers and starts them in dependency order.", example: "docker compose up -d" },
          { code: "docker compose ps", what: "Shows the status of Compose services.", why: "Quickly verifies whether the application, database and proxy are healthy/running.", how: "Compose queries the containers belonging to the current project and groups their state by service.", example: "docker compose ps" },
          { code: "docker compose logs -f web", what: "Streams logs for one Compose service.", why: "Makes multi-container debugging much easier.", how: "Compose collects logs from the selected service container(s) and multiplexes them into one terminal stream.", example: "docker compose logs -f web" },
          { code: "docker compose down", what: "Stops and removes the containers and network created by Compose.", why: "Useful for resetting a development stack without deleting named volumes unless explicitly requested.", how: "Compose stops and removes the project containers and network it created, while named volumes remain unless you explicitly request their removal.", example: "docker compose down" }
        ]
      }
    ]
  },

  Kubernetes: {
    eyebrow: "CONTAINER ORCHESTRATION",
    description: "Core kubectl commands for inspecting workloads, applying manifests, exposing services, reading logs and debugging Kubernetes.",
    groups: [
      { title: "Cluster & Context", commands: [
        { code: "kubectl cluster-info", what: "Displays endpoints for the Kubernetes control plane and cluster services.", why: "A fast sanity check that kubectl can reach a cluster.", how: "kubectl reads the active kubeconfig context and sends API requests to the cluster endpoints, then prints the reachable control-plane and service URLs.", example: "kubectl cluster-info" },
        { code: "kubectl get nodes", what: "Lists nodes registered with the cluster and their readiness state.", why: "Shows whether the compute layer is available.", how: "kubectl queries the Kubernetes API for Node objects and formats their readiness, role, age and version information.", example: "kubectl get nodes -o wide" },
        { code: "kubectl config get-contexts", what: "Lists available kubeconfig contexts.", why: "Prevents accidentally operating on the wrong cluster.", how: "kubectl reads and updates kubeconfig context information locally, determining which cluster, user and namespace future API requests will use.", example: "kubectl config get-contexts" },
        { code: "kubectl config use-context dev", what: "Switches kubectl to a named context.", why: "Use separate contexts for local, staging and production clusters.", how: "kubectl reads and updates kubeconfig context information locally, determining which cluster, user and namespace future API requests will use.", example: "kubectl config use-context dev" }
      ]},
      { title: "Workloads", commands: [
        { code: "kubectl get pods", what: "Lists Pods in the current namespace.", why: "Your first view of whether workloads are running.", how: "kubectl queries Pod objects from the API server and renders their phase, restart count, age and optionally node/IP details.", example: "kubectl get pods -o wide" },
        { code: "kubectl get deployments", what: "Lists Deployments and their desired/current/available replicas.", why: "Shows the controller managing a replicated application.", how: "kubectl reads Deployment objects and compares desired replicas with current and available replicas reported by the controller.", example: "kubectl get deployments" },
        { code: "kubectl apply -f deployment.yaml", what: "Creates or updates Kubernetes resources from a manifest.", why: "The declarative workflow used to make cluster state match configuration.", how: "kubectl sends the manifest to the API server using declarative apply semantics; controllers then reconcile the cluster toward the declared state.", example: "kubectl apply -f k8s/" },
        { code: "kubectl rollout status deployment/api", what: "Waits for a Deployment rollout to reach its desired state.", why: "Useful in deployment scripts and CI/CD verification.", how: "kubectl watches the Deployment status conditions and replica progress until the rollout reaches the desired state or reports a failure.", example: "kubectl rollout status deployment/api" },
        { code: "kubectl rollout undo deployment/api", what: "Rolls a Deployment back to its previous revision.", why: "A basic recovery action when a rollout introduces a problem.", how: "kubectl asks the Deployment controller to restore a previous ReplicaSet revision, causing Pods to be recreated from that revision.", example: "kubectl rollout undo deployment/api" }
      ]},
      { title: "Services & Networking", commands: [
        { code: "kubectl get svc", what: "Lists Kubernetes Services and their types, cluster IPs and ports.", why: "Helps understand how workloads are exposed to other workloads or outside clients.", how: "kubectl reads Service objects and prints their virtual IP, ports and exposure type; the Service then routes traffic to matching Pod endpoints.", example: "kubectl get svc" },
        { code: "kubectl describe svc api", what: "Shows detailed Service configuration and selected endpoints.", why: "Useful when traffic is not reaching the expected Pods.", how: "kubectl fetches the Service object plus related endpoint/event information and expands it into a human-readable diagnostic view.", example: "kubectl describe svc api" },
        { code: "kubectl get ingress", what: "Lists Ingress resources that define HTTP/HTTPS routing.", why: "Useful when an ingress controller is responsible for external web traffic.", how: "kubectl queries Ingress resources; an ingress controller watches these objects and translates their rules into proxy configuration.", example: "kubectl get ingress -A" }
      ]},
      { title: "Debugging", commands: [
        { code: "kubectl describe pod api-xxxxx", what: "Shows detailed Pod state, events, mounts, scheduling and container information.", why: "One of the best commands when a Pod is Pending, CrashLoopBackOff or failing.", how: "kubectl retrieves the Pod specification, status, container states, events, mounts and scheduling information from the API server.", example: "kubectl describe pod api-xxxxx" },
        { code: "kubectl logs api-xxxxx", what: "Reads logs emitted by a container in a Pod.", why: "The first place to look for application-level failures.", how: "kubectl asks the node-side kubelet/container runtime for the selected container log stream and prints it to the terminal.", example: "kubectl logs deployment/api" },
        { code: "kubectl exec -it api-xxxxx -- sh", what: "Starts a shell command inside a running container.", why: "Lets you inspect runtime configuration and network connectivity from inside the workload.", how: "kubectl opens an exec session through the API server to the container runtime, allowing a command to run inside the selected container.", example: "kubectl exec -it api-xxxxx -- sh" },
        { code: "kubectl get events --sort-by=.lastTimestamp", what: "Shows recent Kubernetes events ordered by time.", why: "Very useful for discovering scheduling, image pull, probe and mount failures.", how: "kubectl queries Event objects and sorts them client-side by timestamp, exposing scheduling, image, probe and mount failures.", example: "kubectl get events -A --sort-by=.lastTimestamp" }
      ]}
    ]
  },

  "Git / GitHub": {
    eyebrow: "VERSION CONTROL",
    description: "The everyday Git workflow from creating a branch through committing, reviewing, synchronizing and inspecting history.",
    groups: [
      { title: "Daily Workflow", commands: [
        { code: "git status", what: "Shows modified, staged and untracked files plus the current branch.", why: "Use it before almost every Git operation to understand repository state.", how: "Git compares the working tree and index with the current commit, then classifies files as modified, staged or untracked.", example: "git status" },
        { code: "git switch -c feature/docker", what: "Creates and switches to a new branch.", why: "Keeps work isolated from the main branch.", how: "Git updates HEAD to the requested branch and changes the working tree to match that branch, creating it first when -c is used.", example: "git switch -c feature/k8s-deployment" },
        { code: "git add .", what: "Stages changes in the current directory.", why: "Moves selected changes into the next commit.", how: "Git calculates the file changes and copies the selected snapshots into the staging index that will become the next commit.", example: "git add src/ Dockerfile" },
        { code: "git commit -m \"Add Docker deployment\"", what: "Creates a commit containing staged changes.", why: "Creates a traceable checkpoint in project history.", how: "Git creates a new commit object from the staged tree, records the parent commit and metadata, then moves the current branch reference forward.", example: "git commit -m \"Add Docker deployment\"" },
        { code: "git push -u origin feature/docker", what: "Uploads the branch to the remote repository and sets its upstream.", why: "Makes work available for collaboration and pull-request review.", how: "Git negotiates with the remote, transfers missing commit/tree/blob objects and updates the remote branch reference when the push is accepted.", example: "git push -u origin feature/docker" }
      ]},
      { title: "History & Inspection", commands: [
        { code: "git log --oneline --graph --decorate", what: "Displays compact commit history with branches and merge relationships.", why: "Useful for quickly understanding how a repository evolved.", how: "Git walks the commit graph reachable from the requested references and formats the history into a compact graph view.", example: "git log --oneline --graph --decorate --all" },
        { code: "git diff", what: "Shows unstaged changes in tracked files.", why: "Lets you review exactly what will change before staging.", how: "Git compares two repository states—working tree, index or commits—and calculates the line-level differences between them.", example: "git diff" },
        { code: "git diff --staged", what: "Shows changes already placed in the staging area.", why: "Review the exact content that the next commit will contain.", how: "Git compares two repository states—working tree, index or commits—and calculates the line-level differences between them.", example: "git diff --staged" },
        { code: "git remote -v", what: "Shows configured remote repository URLs.", why: "Useful for verifying where fetch and push operations go.", how: "The command is parsed by the relevant CLI, which translates the requested operation into API or system calls and returns the resulting state to the terminal.", example: "git remote -v" }
      ]},
      { title: "Sync & Collaboration", commands: [
        { code: "git fetch --prune", what: "Downloads remote references without changing your working branch and removes stale remote-tracking refs.", why: "Keeps your local view of the remote repository current.", how: "The command is parsed by the relevant CLI, which translates the requested operation into API or system calls and returns the resulting state to the terminal.", example: "git fetch --prune" },
        { code: "git pull --rebase", what: "Fetches remote changes and rebases local commits on top of them.", why: "Keeps a linear history in workflows that use rebase.", how: "Git fetches remote objects and then integrates the selected remote branch into the current branch using the configured pull strategy.", example: "git pull --rebase origin main" },
        { code: "git merge main", what: "Merges the main branch into the current branch.", why: "Useful when your workflow prefers merge-based integration.", how: "Git combines two branch histories by finding a common ancestor and creating a merge commit when a fast-forward is not possible.", example: "git merge main" }
      ]}
    ]
  },

  "CI/CD": {
    eyebrow: "DELIVERY AUTOMATION",
    description: "Common commands and workflow building blocks used inside CI/CD pipelines to install, test, build, package and publish applications.",
    groups: [
      { title: "Pipeline Checks", commands: [
        { code: "git diff --check", what: "Checks staged or working-tree changes for whitespace errors and other patch formatting problems.", why: "A lightweight quality gate that can catch avoidable issues before code is committed or merged.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "git diff --check" },
        { code: "npm ci", what: "Installs Node.js dependencies exactly from the lockfile and is designed for automated environments.", why: "Preferred over npm install for reproducible CI builds.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "npm ci" },
        { code: "npm test", what: "Runs the project's configured test suite.", why: "Prevents known regressions from reaching later pipeline stages.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "npm test" },
        { code: "npm run build", what: "Runs the project's production build script.", why: "Validates that the application can be packaged for deployment.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "npm run build" }
      ]},
      { title: "Docker in CI/CD", commands: [
        { code: "docker build -t registry/app:$GIT_SHA .", what: "Builds an immutable image tagged with the commit SHA.", why: "Makes each deployment traceable to an exact source revision.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "docker build -t registry.example.com/app:$GIT_SHA ." },
        { code: "docker push registry/app:$GIT_SHA", what: "Publishes the built image to a registry.", why: "Makes the exact artifact available to deployment infrastructure.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "docker push registry.example.com/app:$GIT_SHA" },
        { code: "docker run --rm registry/app:$GIT_SHA", what: "Starts a temporary container from the new artifact and removes it when it exits.", why: "Useful for smoke-testing an image before deployment.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "docker run --rm registry.example.com/app:$GIT_SHA" }
      ]},
      { title: "GitHub Actions", commands: [
        { code: "git push origin main", what: "Pushes a commit to the main branch, which can trigger a GitHub Actions workflow.", why: "A common event that starts automated validation and deployment.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "git push origin main" },
        { code: "gh workflow run deploy.yml", what: "Uses the GitHub CLI to manually trigger a workflow.", why: "Useful when a workflow supports manual dispatch.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "gh workflow run deploy.yml" },
        { code: "gh run list", what: "Lists recent GitHub Actions workflow runs.", why: "Quickly inspect whether automation succeeded or failed.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "gh run list" },
        { code: "gh run view <run-id> --log", what: "Displays logs for a specific GitHub Actions run.", why: "Helps diagnose failed CI/CD steps.", how: "The pipeline runner executes this stage automatically after the configured trigger, passing artifacts, status and environment variables between workflow steps.", example: "gh run view 123456 --log" }
      ]}
    ]
  },

  Terraform: {
    eyebrow: "INFRASTRUCTURE AS CODE",
    description: "The core Terraform workflow: initialize providers, format code, validate configuration, preview changes and apply infrastructure.",
    groups: [
      { title: "Workflow", commands: [
        { code: "terraform init", what: "Initializes a Terraform working directory and downloads required providers/modules.", why: "The first command in a new or freshly cloned Terraform project.", how: "Terraform downloads required providers/modules and creates the local metadata needed to initialize the working directory.", example: "terraform init" },
        { code: "terraform fmt", what: "Formats Terraform configuration files to the canonical style.", why: "Keeps infrastructure code consistent and readable.", how: "Terraform parses configuration files and rewrites them into the canonical formatting style so diffs stay consistent.", example: "terraform fmt -recursive" },
        { code: "terraform validate", what: "Checks whether the configuration is syntactically valid and internally consistent.", why: "A fast CI gate before planning or applying changes.", how: "Terraform parses the configuration and checks its syntax and internal references without changing infrastructure.", example: "terraform validate" },
        { code: "terraform plan", what: "Calculates the changes Terraform would make without applying them.", why: "The safest way to review infrastructure changes before deployment.", how: "Terraform refreshes known resource state, evaluates configuration and provider data, then calculates the difference between desired configuration and current infrastructure.", example: "terraform plan" },
        { code: "terraform apply", what: "Applies the planned infrastructure changes.", why: "Creates, updates or removes managed infrastructure.", how: "Terraform takes the proposed execution plan, calls provider APIs and records the resulting resource state in the Terraform state file.", example: "terraform apply" }
      ]},
      { title: "State & Inspection", commands: [
        { code: "terraform state list", what: "Lists resources currently tracked in Terraform state.", why: "Useful for understanding what Terraform believes it manages.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "terraform state list" },
        { code: "terraform show", what: "Displays human-readable details from state or a saved plan.", why: "Useful for inspecting current infrastructure data.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "terraform show" },
        { code: "terraform output", what: "Prints output values defined by the configuration.", why: "Useful for retrieving IP addresses, IDs or other deployment results.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "terraform output -raw public_ip" }
      ]},
      { title: "Safety & Lifecycle", commands: [
        { code: "terraform plan -out=tfplan", what: "Saves the calculated execution plan to a file.", why: "Useful when CI reviews one plan and a later stage applies that exact plan.", how: "Terraform refreshes known resource state, evaluates configuration and provider data, then calculates the difference between desired configuration and current infrastructure.", example: "terraform plan -out=tfplan" },
        { code: "terraform apply tfplan", what: "Applies a previously saved plan.", why: "Helps separate review from execution in automated workflows.", how: "Terraform takes the proposed execution plan, calls provider APIs and records the resulting resource state in the Terraform state file.", example: "terraform apply tfplan" },
        { code: "terraform destroy", what: "Plans and applies removal of resources managed by the current configuration.", why: "Useful for temporary lab environments; never run it casually against important infrastructure.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "terraform destroy" }
      ]}
    ]
  },

  "Nginx": {
    eyebrow: "REVERSE PROXY",
    description: "Practical Nginx commands for validating configuration, managing the service and inspecting logs.",
    groups: [
      { title: "Configuration", commands: [
        { code: "nginx -t", what: "Tests the Nginx configuration syntax and attempts to open referenced files.", why: "Always validate configuration before reloading Nginx.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "sudo nginx -t" },
        { code: "nginx -T", what: "Tests configuration and prints the complete active configuration.", why: "Excellent for debugging which server blocks and includes are actually loaded.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "sudo nginx -T" },
        { code: "systemctl reload nginx", what: "Reloads Nginx configuration without fully stopping the service.", why: "Preferred for applying valid configuration changes with minimal interruption.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "sudo systemctl reload nginx" }
      ]},
      { title: "Service & Logs", commands: [
        { code: "systemctl status nginx", what: "Shows service state and recent systemd log information.", why: "First check when Nginx is not responding.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "systemctl status nginx" },
        { code: "journalctl -u nginx -f", what: "Streams systemd logs for the Nginx service.", why: "Useful for startup and service-level troubleshooting.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "sudo journalctl -u nginx -f" },
        { code: "tail -f /var/log/nginx/error.log", what: "Streams Nginx error log entries.", why: "Useful for diagnosing upstream, permissions and configuration issues.", how: "Terraform loads configuration and state, evaluates dependencies and uses the selected provider to perform the requested infrastructure operation.", example: "sudo tail -f /var/log/nginx/error.log" }
      ]}
    ]
  }
};


export const courses = [
  { title: "Cloud & DevOps Foundations", level: "Beginner", mode: "Self-paced", status: "Coming soon", description: "A practical path from Linux and networking fundamentals into Docker, CI/CD and cloud infrastructure.", topics: ["Linux", "Networking", "Docker", "CI/CD"], accent: "cloud" },
  { title: "Docker in Real Projects", level: "Beginner → Intermediate", mode: "Hands-on", status: "Coming soon", description: "Build, network, persist and ship containerized applications using real project workflows.", topics: ["Images", "Compose", "Networks", "Volumes"], accent: "docker" },
  { title: "Kubernetes Practical Lab", level: "Intermediate", mode: "Hands-on", status: "Coming soon", description: "A project-based future course covering workloads, services, configuration, troubleshooting and deployments.", topics: ["Pods", "Services", "Deployments", "Debugging"], accent: "kubernetes" },
  { title: "Cloud Security Essentials", level: "Beginner → Intermediate", mode: "Lab-based", status: "Planned", description: "Practical security thinking for cloud and DevOps environments through controlled labs and real scenarios.", topics: ["IAM", "Secrets", "Hardening", "Monitoring"], accent: "security" }
];

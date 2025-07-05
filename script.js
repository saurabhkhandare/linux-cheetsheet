// List of Linux commands with usage and example (expand as needed)
const commands = [
  {
    name: "ls",
    usage: "ls [options] [directory]",
    desc: "List directory contents and information.",
    example: "ls -l /home/user",
  },
  {
    name: "pwd",
    usage: "pwd",
    desc: "Print the current working directory.",
    example: "pwd",
  },
  {
    name: "cd",
    usage: "cd [directory]",
    desc: "Change the current directory.",
    example: "cd /var/log",
  },
  {
    name: "mkdir",
    usage: "mkdir [directory name]",
    desc: "Create a new directory.",
    example: "mkdir newfolder",
  },
  {
    name: "rmdir",
    usage: "rmdir [directory name]",
    desc: "Remove an empty directory.",
    example: "rmdir oldfolder",
  },
  {
    name: "rm",
    usage: "rm [options] [file or directory]",
    desc: "Remove files or directories. Use -r for recursive and -f for force.",
    example: "rm -rf temp",
  },
  {
    name: "cp",
    usage: "cp [options] source destination",
    desc: "Copy files or directories. Use -r to copy directories recursively.",
    example: "cp -r folder1 folder2",
  },
  {
    name: "mv",
    usage: "mv [source] [destination]",
    desc: "Move or rename files and directories.",
    example: "mv oldname.txt newname.txt",
  },
  {
    name: "touch",
    usage: "touch [file]",
    desc: "Create a new empty file or update the timestamp.",
    example: "touch notes.txt",
  },
  {
    name: "cat",
    usage: "cat [file]",
    desc: "Display the contents of a file.",
    example: "cat file.txt",
  },
  {
    name: "head",
    usage: "head [options] [file]",
    desc: "Show the first 10 lines of a file by default.",
    example: "head -n 5 file.txt",
  },
  {
    name: "tail",
    usage: "tail [options] [file]",
    desc: "Show the last 10 lines of a file by default.",
    example: "tail -f /var/log/syslog",
  },
  {
    name: "grep",
    usage: "grep [pattern] [file]",
    desc: "Search for patterns in files.",
    example: "grep 'error' logfile.txt",
  },
  {
    name: "find",
    usage: "find [path] [criteria]",
    desc: "Search for files and directories.",
    example: "find . -type f -name '*.txt'",
  },
  {
    name: "chmod",
    usage: "chmod [options] mode file",
    desc: "Change file permissions.",
    example: "chmod +x script.sh",
  },
  {
    name: "chown",
    usage: "chown [owner][:group] file",
    desc: "Change file owner and group.",
    example: "chown user:group file.txt",
  },
  {
    name: "ps",
    usage: "ps [options]",
    desc: "Display information about running processes.",
    example: "ps aux",
  },
  {
    name: "top",
    usage: "top",
    desc: "Display real-time system processes and resource usage.",
    example: "top",
  },
  {
    name: "kill",
    usage: "kill [signal] PID",
    desc: "Send a signal to a process, usually to terminate it.",
    example: "kill -9 1234",
  },
  {
    name: "killall",
    usage: "killall [process name]",
    desc: "Kill all processes matching the name.",
    example: "killall firefox",
  },
  {
    name: "df",
    usage: "df [options]",
    desc: "Report file system disk space usage.",
    example: "df -h",
  },
  {
    name: "du",
    usage: "du [options] [file or directory]",
    desc: "Estimate file and directory space usage.",
    example: "du -sh *",
  },
  {
    name: "free",
    usage: "free [options]",
    desc: "Display memory usage.",
    example: "free -m",
  },
  {
    name: "uname",
    usage: "uname [options]",
    desc: "Show system information.",
    example: "uname -a",
  },
  {
    name: "ifconfig",
    usage: "ifconfig [interface]",
    desc: "Display or configure network interfaces.",
    example: "ifconfig eth0",
  },
  {
    name: "ping",
    usage: "ping [options] destination",
    desc: "Send ICMP ECHO_REQUEST to network hosts.",
    example: "ping google.com",
  },
  {
    name: "wget",
    usage: "wget [options] [URL]",
    desc: "Download files from the web.",
    example: "wget https://example.com/file.zip",
  },
  {
    name: "curl",
    usage: "curl [options] [URL]",
    desc: "Transfer data from or to a server.",
    example: "curl https://example.com",
  },
  {
    name: "tar",
    usage: "tar [options] [archive] [file(s)]",
    desc: "Archive files and directories.",
    example: "tar -czvf backup.tar.gz folder/",
  },
  {
    name: "zip",
    usage: "zip [archive] [file(s)]",
    desc: "Compress files into a zip archive.",
    example: "zip archive.zip file1 file2",
  },
  {
    name: "unzip",
    usage: "unzip [archive]",
    desc: "Extract files from a zip archive.",
    example: "unzip archive.zip",
  },
  {
    name: "man",
    usage: "man [command]",
    desc: "Display the manual for a command.",
    example: "man ls",
  },
  {
    name: "history",
    usage: "history",
    desc: "Show command history.",
    example: "history",
  },
  {
    name: "echo",
    usage: "echo [text]",
    desc: "Display a line of text.",
    example: "echo Hello World",
  },
  {
    name: "whoami",
    usage: "whoami",
    desc: "Show the current username.",
    example: "whoami",
  },
  {
    name: "date",
    usage: "date",
    desc: "Display or set the system date and time.",
    example: "date",
  },
  {
    name: "shutdown",
    usage: "shutdown [option] [time] [message]",
    desc: "Turn off or restart your Linux system at a specific time.",
    example: "shutdown -r now",
  },
  {
    name: "reboot",
    usage: "reboot",
    desc: "Restart the Linux system.",
    example: "reboot",
  },
  {
    name: "systemctl",
    usage: "systemctl [command] [service]",
    desc: "Control the systemd system and service manager.",
    example: "systemctl start apache2",
  },
  {
    name: "service",
    usage: "service [service] [command]",
    desc: "Run a System V init script.",
    example: "service ssh restart",
  },
  {
    name: "jobs",
    usage: "jobs [options]",
    desc: "List active jobs in the current shell.",
    example: "jobs -l",
  },
  {
    name: "bg",
    usage: "bg [job ID]",
    desc: "Resume a suspended job in the background.",
    example: "bg %1",
  },
  {
    name: "fg",
    usage: "fg [job ID]",
    desc: "Bring a background job to the foreground.",
    example: "fg %1",
  },
  {
    name: "strace",
    usage: "strace [options] [command]",
    desc: "Trace system calls and signals.",
    example: "strace ls",
  },
  {
    name: "lsof",
    usage: "lsof [options]",
    desc: "List open files and the processes that opened them.",
    example: "lsof -i :80",
  },
  // Add more commands as needed
];

// Render cards
const grid = document.getElementById("commandsGrid");
commands.forEach((cmd) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <div class="card-title">${cmd.name}</div>
        <div class="card-label">Usage</div>
        <div class="card-usage">${cmd.usage}</div>
        <div class="card-label">Description</div>
        <div class="card-desc">${cmd.desc}</div>
        <div class="card-label">Example</div>
        <div class="card-example">${cmd.example}</div>
      `;
  grid.appendChild(card);
});

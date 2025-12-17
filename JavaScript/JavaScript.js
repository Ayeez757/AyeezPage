// 替换原来的主题切换代码
document.addEventListener('DOMContentLoaded', function() {
    const lampLight = document.getElementById('lamp-light');
    
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme');
    
    // 如果有保存的主题设置，使用它；否则根据系统偏好设置
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    } else {
        // 检查系统主题偏好
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }
    }
    
    // 切换主题功能
    if (lampLight) {
        lampLight.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // 保存设置
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});


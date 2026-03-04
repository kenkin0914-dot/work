/* 全域設定 */
* {
    box-sizing: border-box;
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}

body {
    background: #f4f7f9;
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    max-width: 1200px;
    width: 100%;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    padding: 25px;
}

h1 {
    font-size: 2rem;
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 20px;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
    display: inline-block;
}

/* 工具列 */
.toolbar {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.toolbar button {
    background: #ecf0f1;
    border: none;
    padding: 10px 18px;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #2c3e50;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: 0.2s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.toolbar button:hover {
    background: #d5dbdb;
    transform: translateY(-2px);
}

#addRowBtn {
    background: #2ecc71;
    color: white;
}
#addRowBtn:hover { background: #27ae60; }

#saveBtn {
    background: #3498db;
    color: white;
}
#saveBtn:hover { background: #2980b9; }

#exportBtn {
    background: #f39c12;
    color: white;
}
#exportBtn:hover { background: #e67e22; }

#importBtn {
    background: #9b59b6;
    color: white;
}
#importBtn:hover { background: #8e44ad; }

/* 表格設計 */
table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.03);
}

th {
    background: #34495e;
    color: white;
    padding: 12px 8px;
    font-weight: 600;
    font-size: 0.9rem;
}

td {
    padding: 8px;
    border-bottom: 1px solid #e0e0e0;
}

tbody tr:hover {
    background: #f8f9fa;
}

input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #d0d0d0;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: 0.15s;
}

input:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52,152,219,0.2);
}

/* 總價欄位唯讀 */
input[readonly] {
    background: #f9f9f9;
    color: #2c3e50;
    font-weight: 500;
}

/* 刪除按鈕 */
.deleteBtn {
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    margin: 0 auto;
}

.deleteBtn:hover {
    background: #c0392b;
    transform: scale(1.1);
}

tfoot td {
    background: #ecf0f1;
    font-weight: bold;
    padding: 12px 8px;
    font-size: 1.1rem;
}

#grandTotal {
    color: #27ae60;
}

.footer {
    margin-top: 20px;
    text-align: center;
    color: #7f8c8d;
}

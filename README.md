# Serverless CRUD REST API
<br>
<hr>
<br>
<ul>
    <h3>Quick Links: </h3>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#deployment">Deployment</a></li>
</ul>
<br>
<hr>
<br>
<div id="usage"></div>
## Usage:
<table>
    <tr>
        <th>No</th>
        <th>Method Type</th>
        <th>EndPoints</th>
    </tr>
    <tr>
        <td>1.</td>
        <td>POST</td>
        <td>https://yjbqcl7od0.execute-api.ca-central-1.amazonaws.com/dev/data</td>
    </tr>
    <tr>
        <td>2.</td>
        <td>GET</td>
        <td>https://yjbqcl7od0.execute-api.ca-central-1.amazonaws.com/dev/data</td>
    </tr>
    <tr>
        <td>3.</td>
        <td>GET</td>
        <td>https://yjbqcl7od0.execute-api.ca-central-1.amazonaws.com/dev/data/{id}</td>
    </tr>
    <tr>
        <td>4.</td>
        <td>PUT</td>
        <td>https://yjbqcl7od0.execute-api.ca-central-1.amazonaws.com/dev/data/{id}</td>
    </tr>
    <tr>
        <td>5.</td>
        <td>DELETE</td>
        <td>https://yjbqcl7od0.execute-api.ca-central-1.amazonaws.com/dev/data/{id}</td>
    </tr>
</table>
<br>
<hr>
<br>
<div>
    <h3>Sending Post Request to Api with /data EndPoint using Postman</h3>
    <img src="./documents/media/images/post.png">
    <h3>Response We Get:</h3>
    <img src="./documents/media/images/postResult.png">
</div>
<br>
<hr>
<br>
<div>
    <h3>Sending Get Request to Api with /data EndPoint using Postman</h3>
    <img src="./documents/media/images/getAll.png">
    <h3>Sending Get Request to Api with /data/{id} EndPoint using Postman</h3>
    <img src="./documents/media/images/getById.png">
</div>
<br>
<hr>
<br>
<div>
    <h3>Sending Put Request to Api with /data/{id} EndPoint using Postman</h3>
    <img src="./documents/media/images/put.png">
    <h3>Sending Get Request to Api with /data/{id} EndPoint using Postman To Check For Updates</h3>
    <img src="./documents/media/images/putResult.png">
</div>
<br>
<hr>
<br>
<div>
    <h3>Sending Delete Request to Api with /data/{id} EndPoint using Postman</h3>
    <img src="./documents/media/images/delete.png">
    <h3>Sending Get Request to Api with /data EndPoint using Postman To Check For Data</h3>
    <img src="./documents/media/images/deleteResult_1.png">
    <h3>Sending Get Request to Api with /data/{id} EndPoint using Postman To Check For Data</h3>
    <img src="./documents/media/images/deleteResult_2.png">
</div>
<br>
<hr>
<br>

<div id="deployment"></div>

## Deployment:
<div>
    1. Install NodeJs enviornment: <a href="https://nodejs.org/en/download/">Click Here To Download</a>
    2. Install Aws CLI: (Make Sure to have a aws account) <a href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html">Click Here To Download</a>
    3. Clone This Repository( Make sure git is install and congigured ):
    ```
    > git clone https://github.com/jatin711-debug/serverless-api-qrvey-assignment.git
    ```
    4. Install Dependencies:
    ```
    > npm install && npm install -g serverless
    ```
    5. Config Aws Credentials:
    ```
    > aws config
    ```
    6. Deploy Application to Aws Cloud:
    ```
    > serverless deploy
    ```
</div>








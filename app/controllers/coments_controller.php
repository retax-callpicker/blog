<?php
class ComentsController extends AppController {

    var $name = 'Coments';

    function index() {
        return $this->_encodeJsonResponse($this->Coment->find('all'));
    }

    function add() {

        $response = "";
        $error = false;
        $errors = array();
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data)) {
            if ($coment = $this->Coment->save($data)) {
                $this->_set_user_cookie($data->user);
                $response = $coment;
            } else {
                $error = true;
                $errors[] = "Data error";
            }
        } else {
            $error = true;
            $errors[] = "Empty data";
        }
        
        return $this->_encodeJsonResponse($response, "", $errors);
    }

    function delete($id = null) {
        $this->autoRender = false;
        $this->Coment->del($id);
        $this->_httpRespCode(204);
    }

    function _set_user_cookie($user) {
        if (!isset($_COOKIE["user_token"]) || empty($_COOKIE["user_token"]))
            setcookie("username", $user, 0, "/retax/blog/practica");
    }

}
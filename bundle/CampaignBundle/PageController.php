<?php

namespace CampaignBundle;

use Core\Controller;
use Lib\UserAPI;

class PageController extends Controller
{
	public function indexAction() {
		global $user;
        $userAPI = new UserAPI();
        $userInfo = $userAPI->findUserByOpenid($user->openid);
		return $this->render('index', array('nickname' => $userInfo->nickname));
	}

	public function clearCookieAction() {
      	$request = $this->Request();
		setcookie('_user', '', time(), '/', $request->getDomain());
		$this->statusPrint('success');
	}



}
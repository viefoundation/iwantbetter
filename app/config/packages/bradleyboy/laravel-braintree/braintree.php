<?php

return array(
	'environment'             => $_ENV['braintree.environment'],
	'merchantId'              => $_ENV['braintree.merchantId'],
	'publicKey'               => $_ENV['braintree.publicKey'],
	'privateKey'              => $_ENV['braintree.privateKey'],
	'clientSideEncryptionKey' => $_ENV['braintree.clientSideEncryptionKey']
);
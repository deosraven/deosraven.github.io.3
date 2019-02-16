/**
 * Créer une fenêtre d'alerte, sans titre.
 * 
 * @param text
 *        Texte dans la fenêtre.
 */
function px_alert(text)
{
	fwModalConfirm_createAlert(text, '', '', true);
}

/**
 * Permet de créer une fenêtre d'alerte en spécifiant les paramètres sous forme de tableau associatif. L'ordre des paramètres n'est pas important. Les paramètres suivants sont autorisés : text, titre, look.
 * 
 * Exemple : px_alert_aa({titre: "Erreur", text: "Une erreur est survenue"});
 * 
 * @param aa_params
 *        Objet contenant les différents paramètres et leurs valeurs.
 */
function px_alert_aa(aa_params)
{
	if (typeof aa_params != typeof undefined && typeof aa_params == 'object')
	{
		var text = getStringValue(aa_params, 'text');
		var titre = getStringValue(aa_params, 'titre');
		var look = getStringValue(aa_params, 'look');
		var jsOk = getStringValue(aa_params, 'jsOk');
		var lb_alert;
		switch (look)
		{
			case 'A':
				lb_alert = true;
				break;
			case 'C':
				lb_alert = false;
				break;
			case '':
			default:
				lb_alert = true;
				break;
		}

		fwModalConfirm_createAlert(text, titre, jsOk, lb_alert);
	}
}

/**
 * Fenêtre de confirmation avec boutons plats. La fonction définit des paramètres par défaut (text, jsOk et jsCancel). exemple : px_confirm('Voulez-vous éditer?','edit()');
 * 
 * @param text
 *        Texte à afficher.
 * @param jsOk
 *        Fonction JS au format String à exécuter lors du clic sur Ok.
 * @param jsCancel
 *        Fonction JS au format String à exécuter lors du clic sur Annuler.
 */
function px_confirm(text, jsOk, jsCancel)
{
	fwModalConfirm_create(text, '', '', jsOk, '', '', jsCancel, '', '', '', '', '', false, false, false, false);
}

/**
 * Permet de créer une fenêtre de confirmation en spécifiant les paramètres sous forme de tableau associatif. L'ordre des paramètres n'est pas important. Les paramètres suivants sont autorisés : text, textOk, iconOk, jsOk, textCancel, iconCancel, jsCancel, text3, icon3, js3, iconSize, titre,
 * escEqualCancel, enterEqualOk, withCheckForm.
 * 
 * Exemple : px_confirm_aa({titre: "Confirmer", text: "Veuillez répondre par OK ou Annuler", jsOk: "f_ok()"});
 * 
 * @param aa_params
 *        Objet contenant les différents paramètres et leurs valeurs.
 */
function px_confirm_aa(aa_params)
{
	if (typeof aa_params != typeof undefined && typeof aa_params == 'object')
	{
		var text = getStringValue(aa_params, 'text');
		var textOk = getStringValue(aa_params, 'textOk');
		var iconOk = getStringValue(aa_params, 'iconOk');
		var jsOk = aa_params['jsOk'];
		var textCancel = getStringValue(aa_params, 'textCancel');
		var iconCancel = getStringValue(aa_params, 'iconCancel');
		var jsCancel = getStringValue(aa_params, 'jsCancel');
		var text3 = getStringValue(aa_params, 'text3');
		var icon3 = getStringValue(aa_params, 'icon3');
		var js3 = getStringValue(aa_params, 'js3');
		var iconSize = getStringValue(aa_params, 'iconSize');
		var titre = getStringValue(aa_params, 'titre');
		var enterEqualOk = getBooleanValue(aa_params, 'enterEqualOk');
		var escEqualCancel = getBooleanValue(aa_params, 'escEqualCancel');
		var small = getBooleanValue(aa_params, 'small');
		var alert = getBooleanValue(aa_params, 'alert');
		var withCheckForm = getBooleanValue(aa_params, 'withCheckForm');

		fwModalConfirm_create(text, textOk, iconOk, jsOk, textCancel, iconCancel, jsCancel, text3, icon3, js3, iconSize, titre, small, alert, enterEqualOk, escEqualCancel, withCheckForm);
	}
}

/**
 * Permet de créer et d'afficher une modale directement dans la page sans utiliser le tag du Framework qui réalise exactement la même opération. Il faut passer en paramètres un tableau associatif contenant les caractéristiques de la modale. Les paramètres possibles sont : width, height, url, titre,
 * description, affichButtonClose, afterHide, type, hideContextMenu.
 * 
 * Exemple : px_modal_aa({titre: "Ma modale", description: "Sous-texte", url: "action.do", affichButtonClose: false, width: 600, height: 800, type: "IFRAME"});
 * 
 * @param aa_params
 *        Objet contenant les différents paramètres et leurs valeurs.
 */
function px_modal_aa(aa_params)
{
	if (typeof aa_params != typeof undefined && typeof aa_params == 'object')
	{
		var width = getNumberValue(aa_params, 'width');
		var height = getNumberValue(aa_params, 'height');
		var url = getStringValue(aa_params, 'url');
		var titre = getStringValue(aa_params, 'titre');
		var description = getStringValue(aa_params, 'description');
		var affichButtonClose = getBooleanValue(aa_params, 'affichButtonClose');
		var afterHide = getStringValue(aa_params, 'afterHide');
		var type = getStringValue(aa_params, 'type');
		var hideContextMenu = getBooleanValue(aa_params, 'hideContextMenu');

		fwModalWindow_show(width, height, url, titre, description, affichButtonClose, afterHide, type);
		if (hideContextMenu)
		{
			px_hideContextMenu();
		}
	}
}

/**
 * Permet d'afficher à l'utilisateur un message flottant (toaster) pour indiquer la fin d'une opération. Ce message s'effacera complètement après le délai spécifié en paramètre, avec une animation de fade out.
 * 
 * @param ai_delai
 *        Delai en millisecondes .
 * @param as_message
 *        Message à afficher.
 */
function px_topFadingMsg(ai_delai, as_message)
{
	fw_showTopFadingMessageWithMessage(ai_delai, as_message);
}

/**
 * Affiche un message flottant (toaster) pour indiquer la fin d'une opération. Ce message s'effacera complètement après le délai spécifié en paramètre, avec une animation de fade out.
 * 
 * Exemple: px_topFadingMsg_aa({msg: "Texte à afficher", delai: 8000, closeable: false, fullWidth: true});
 * 
 * @param aa_params
 *        Tableau associatif contenant les différents paramètres
 */
function px_topFadingMsg_aa(aa_params)
{
	if (typeof aa_params != typeof undefined && typeof aa_params == 'object')
	{
		var msg = getStringValue(aa_params, "msg");
		var delai = getNumberValue(aa_params, "delai");
		var closeable = getBooleanValue(aa_params, "closeable", false);
		var fullWidth = getBooleanValue(aa_params, "fullWidth", false);
		var noTop = getBooleanValue(aa_params, "noTop", false);
		var top = getNumberValue(aa_params, "top");
		if (top == 0)
		{
			top = undefined;
		}
		if (delai == 0)
		{
			delai = 5000;
		}

		fw_showTopFadingMessageWithMessage(delai, msg, closeable, fullWidth, top, noTop);
	}
}

/**
 * Modifie de manière permanente pour la page en cours, l'image dans le Top Fading Message.
 * 
 * @param as_src
 *        Source de l'image.
 */
function px_topFadingUpdateImg(as_src)
{
	fw_updateTopFadingImage(as_src);
}

/**
 * Lors de l'ajout de champs dynamiquement dans un formulaire permet de rafraîchir les checkers --> ajout des étoiles, ...
 */
function px_refreshFormCheckers(as_formId)
{
	fw_initLiveCheckers(as_formId);
}

/**
 * Permet de checker les champs du formulaire sans faire de submit.
 * 
 * @param ao_form
 *        Identifiant du formulaire pour lequel on veut faire la vérification ou directement l'objet. Cet objet peut aussi être un fieldset.
 */
function px_checkForm(ao_form)
{
	if (typeof ao_form !== typeof undefined)
	{
		if (typeof ao_form == "string")
		{
			return fw_checkForm($('#' + ao_form));
		}
		else if (typeof ao_form == "object")
		{
			return fw_checkForm(ao_form);
		}
	}

	return false;
}

/**
 * Désactiver les Checkers pour un formulaire spécifique. ( ne supprime pas les étoiles )
 * 
 * @param as_formId
 *        Identifiant du formulaire pour lequel on veut désactiver les Checkers.
 */
function px_disableCheckForm(as_formId)
{
	fw_disableFormChecker(as_formId);
}

/**
 * Afficher une fenêtre d'attente avec un complément de message personnalisé.
 * 
 * @param as_message
 *        Message supplémentaire à afficher.
 */
function px_showWaitMsg(as_message)
{
	ShowWaitMsg(as_message);
}

/**
 * Afficher une fenêtre d'attente avec un message personnalisé. Il s'agira du seul texte présent dans la fenêtre.
 * 
 * @param as_message
 *        Message à afficher.
 */
function px_showWaitMsgWithFullMsg(as_message)
{
	ShowWaitMsgWithFullMsg(as_message);
}

/**
 * Cacher la fenêtre d'attente.
 */
function px_hideWaitMsg()
{
	HideWaitMsg();
}

/**
 * Permet d'obtenir le document à télécharger.
 * 
 * @param as_urlDoc
 *        Le résultat de cette URL doit être : UtilsFile.sendFileDownload(response, "", FileType.PDF, byte[]); return null; ou : UtilsFile.sendErrorFileDownload(response, "error"); return null;
 * @param as_libDoc
 *        Nom du document.
 */
function px_getDocument(as_urlDoc, as_libDoc, as_fctJsRefresh)
{
	var ls_libDoc = ' : <span class="fwGras" style="color: green;">' + as_libDoc + '</span>';
	if (typeof as_libDoc == 'undefined')
	{
		ls_libDoc = ' demandé';
	}

	px_showWaitMsg();
	$.fileDownload(as_urlDoc).done(function(url)
	{
		fwContextMenu_hide();
		fw_showTopFadingMessageWithMessage(10000, "Le document" + ls_libDoc + " est disponible dans la liste de vos fichier téléchargés de votre navigateur", false, true, 120);
		if (typeof as_fctJsRefresh != 'undefined')
		{
			eval(as_fctJsRefresh);
		}
		else
		{
			px_hideWaitMsg();
		}
	}).fail(function(responseHtml, url)
	{
		px_hideWaitMsg();
		var ls_text = responseHtml;
		if (ls_text.match(/<div[^>]*class="fwMain"[^>]*>/gi) !== null)
		{
			ls_text = 'Une erreur interne est survenue.';
		}
		px_alert("Impossible d'obtenir le document" + ls_libDoc + " - cause : " + ls_text);
	});
}

/**
 * Permet de vider des champs d'input (2ème paramètre) lorsqu'on rend le focus au champ passé en 1er paramètre.
 * 
 * @param as_idFocusOn
 *        Identifiant du champ sur lequel on met l'événement de focus.
 * @param aas_idsToClear
 *        Tableau reprenant les identifiants des champs d'input à vider.
 */
function px_emptyInputsCheckFormOnFocus(as_idFocusOn, aas_idsToClear)
{
	$('#' + as_idFocusOn).on("focus.FW", function()
	{
		px_emptyInputsCheckForm(aas_idsToClear);
	});
}

/**
 * Remet à vide la valeur de plusieurs champs d'input passés en paramètre, dans un tableau.
 * 
 * @param aas_idsToClear
 *        Tableau reprenant les identifiants des champs d'input à vider.
 */
function px_emptyInputsCheckForm(aas_idsToClear)
{
	for (i in aas_idsToClear)
	{
		fw_changeVal(aas_idsToClear[i], '');
	}
}

/**
 * Cacher le(s) menu(s) contextuel(s) affiché(s) à l'écran.
 */
function px_hideContextMenu()
{
	fwContextMenu_hide();
}

/**
 * Cacher une modale, et affiche un message en supplément.
 * 
 * @param as_message
 *        Message à afficher.
 */
function px_hideModal(as_message)
{
	window.top.fwModalWindow_hide(as_message);
}

/**
 * Les options possibles dans le data sont décrites ici : https://github.com/ehynds/jquery-ui-multiselect-widget/wiki/Options
 * 
 * @param ao_element
 *        Objet représentant l'élément du DOM sur lequel on crée le multiselect, ou un identifiant pour trouver le select.
 * @param ao_data
 *        Objet qui contient les options du multiselect.
 * @return Instance du multiselect créée.
 */
function px_multiSelect(ao_element, ao_data)
{
	var lo_elt = ao_element;
	if (lo_elt && typeof lo_elt == "string")
	{
		lo_elt = $("#" + ao_element);
	}
	if (!$(lo_elt).hasClass("fwInputSelectMultiple"))
	{
		$(lo_elt).addClass("fwInputSelectMultiple");
	}
	if (!$(lo_elt).is(":disabled") && !$(ao_element).hasClass("fwEnableCheckMultiple"))
	{
		$(lo_elt).addClass("fwEnableCheckMultiple");
	}

	return $(lo_elt).multiselect(ao_data || {});
}

/**
 * Définir un filtre sur un champ multiselect.
 * 
 * @param ao_element
 *        Objet représentant l'élément du DOM sur lequel on crée le multiselect, ou un identifiant pour trouver le select.
 * @param ao_data
 *        Objet qui contient les options du multiselect.
 */
function px_multiSelectFilter(ao_element, ao_data)
{
	px_multiSelect(ao_element, ao_data).multiselectfilter(
	{
		label : "Filtre:",
		placeholder : "",
		autoReset : false
	});
}

/**
 * Initialiser les form Checkers.
 * 
 * @param as_idRoot
 *        Identifiant (d'un formulaire par exemple) permettant de retrouver les champs pour lesquels on va initialiser un checker.
 */
function px_initCheckers(as_idRoot)
{
	fw_initLiveCheckers(as_idRoot);
}

/**
 * Rafraichit les tooltips des éléments qui n'ont pas les classes "notooltip", "tooltip", "selected-flag" et pour lesquels un attribut titre existe.
 */
function px_refreshTooltips()
{
	$('[title][title!=""]:not(.notooltip):not(.selected-flag):not(.tooltip)').addClass("tooltip").tooltipster();
}

/**
 * Permet de rafraîchir les tooltips. element peut être un élément de la DOM, un ID ou ne pas être défini pour tout réinitialiser sur la page.
 * 
 * @param ao_element
 *        Un élément de la DOM, un Identifiant. Si pas défini, réinitialise tout dans la page.
 */
function px_refreshTooltip(ao_element)
{
	var lo_domElement = null;
	if (typeof ao_element === "object")
	{
		lo_domElement = $(ao_element);
	}
	else if (typeof ao_element === "string")
	{
		lo_domElement = $("#" + ao_element.replace(/^#/, ""));
	}
	else
	{
		lo_domElement = $("*");
	}
	if ($(lo_domElement).length)
	{
		$(lo_domElement).each(function()
		{
			$(this).tooltipster("content", $(this).attr("title"));
			$(this).removeAttr("title");
		});
	}
}

/**
 * Permet d'améliorer la gestion du retour d'une requête AJAX, et par défaut d'afficher une erreur en cas d'échec.
 * 
 * @param ao_data
 *        Retour de l'appel AJAX.
 * @param fnctOnSuccess
 *        Fonction à exécuter en cas de succès.
 * @param fnctOnFail
 *        Fonction à exécuter en cas d'échec.
 * @param fnctOnHtmlError
 *        Fonction à exécuter quand on reçoit du HTML à afficher en tant qu'erreur.
 */
function px_ajaxDoneJson(ao_data, fnctOnSuccess, fnctOnFail, fnctOnHtmlError)
{
	fnctOnFail = fnctOnFail || function(ao_data)
	{
		px_alert(ao_data.result);
	};
	fnctOnHtmlError = fnctOnHtmlError || function(ao_data)
	{
		$('#fw16Content').html(ao_data);
	};
	if (typeof ao_data === 'string')
	{
		fnctOnHtmlError(ao_data);
	}
	else if (ao_data.success)
	{
		if (fnctOnSuccess)
		{
			fnctOnSuccess(ao_data);
		}
	}
	else
	{
		fnctOnFail(ao_data);
	}
}

/**
 * Créer une fenêtre déplaçable.
 * 
 * @param id
 *        Identifiant de la fenêtre à créer.
 * @param width
 *        Largeur.
 * @param height
 *        Hauteur.
 * @param url
 *        URL.
 * @param titre
 *        Titre.
 * @param closeable
 *        Peut être fermée.
 * @param maximizable
 *        Peut être maximisée.
 * @param resizeable
 *        Peut être redimensionnée.
 * @param minWidth
 *        Largeur minimum.
 * @param minHeight
 *        Hauteur minimum.
 * @param maxWidth
 *        Largeur maximum.
 * @param maxHeight
 *        Hauteur maximum.
 */
function px_window(id, width, height, url, titre, closeable, maximizable, resizeable, minWidth, minHeight, maxWidth, maxHeight)
{
	fwWindow_show(id, width, height, url, titre, closeable, maximizable, resizeable, minWidth, minHeight, maxWidth, maxHeight);
}

/**
 * Créer une fenêtre déplaçable en passant les paramètres nécessaires sous forme d'objet.
 * 
 * @param aa_params
 *        Objet contenant les différents paramètres et leurs valeurs.
 */
function px_window_aa(aa_params)
{
	if (typeof aa_params != typeof undefined && typeof aa_params == 'object')
	{
		var id = getStringValue(aa_params, 'id');
		var width = getNumberValue(aa_params, 'width');
		var height = getNumberValue(aa_params, 'height');
		var minWidth = getNumberValue(aa_params, 'minWidth');
		var maxWidth = getNumberValue(aa_params, 'maxWidth');
		var minHeight = getNumberValue(aa_params, 'minHeight');
		var maxHeight = getNumberValue(aa_params, 'maxHeight');
		var url = aa_params['url'];
		var titre = getStringValue(aa_params, 'titre');
		var closeable = getBooleanValue(aa_params, 'closeable');
		var maximizable = getBooleanValue(aa_params, 'maximizable');
		var resizeable = getBooleanValue(aa_params, 'resizeable');
		var hideContextMenu = getBooleanValue(aa_params, 'hideContextMenu');

		fwWindow_show(id, width, height, url, titre, closeable, maximizable, resizeable, minWidth, minHeight, maxWidth, maxHeight);
		if (hideContextMenu)
		{
			px_hideContextMenu();
		}
	}
}

/**
 * Alerte générique à utiliser dans le mode What Student Sees?
 */
function px_wss()
{
	px_alert_aa(
	{
		titre : "Fonction désactivée",
		text : "Fonction désactivée dans ce mode."
	});
}